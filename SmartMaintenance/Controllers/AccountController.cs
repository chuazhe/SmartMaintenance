using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using SmartMaintenance.Helpers;
using SmartMaintenance.Models;

namespace SmartMaintenance.Controllers
{
    // 1 authorize for all the function under this class, except for those who has [AllowAnonymous]
    
    public class AccountController : Controller
    {
        private UserManager<AppUser> userManager;
        private SignInManager<AppUser> signInManager;
        private readonly AppSettings _appSettings;

        //Constructor
        public AccountController(UserManager<AppUser> userMgr,
        SignInManager<AppUser> signinMgr, IOptions<AppSettings> appSettings)
        {
            userManager = userMgr;
            signInManager = signinMgr;
            _appSettings = appSettings.Value;
        }

        // allows unauthenticated users to log into the application
        [AllowAnonymous]
        // Redirect the user to the login page if it is not  authenticated or first time opening it 
        public IActionResult Login(string returnUrl)
        {
            ViewBag.returnUrl = returnUrl;
            return View();
        }

        /*Authorize attribute, which tells MVC that only requests from authenticated
          users should be processed*/
        [Authorize]
        public async Task<IActionResult> Logout()
        {
            await signInManager.SignOutAsync();
            HttpContext.Session.SetString("JWT", "XXX");
            return RedirectToAction("Index", "Home");
        }

        //Respond to POST method
        [HttpPost]
        // allows unauthenticated users to log into the application
        [AllowAnonymous]
        // works in conjunction with the form element tag helper to protect against cross-site request forgery
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginModel details,
         string returnUrl)
        {
            // If the input is valid
            if (ModelState.IsValid)
            {
                //This method locates a user account using the e-mail address that was used to create it.
                AppUser user = await userManager.FindByEmailAsync(details.Email);
                if (user != null)
                {
                    // await = asynchronous
                    // SignOutAsync method cancels any existing session that the user has
                    await signInManager.SignOutAsync();
                    // PasswordSignIn method performs the authentication
                    Microsoft.AspNetCore.Identity.SignInResult result =
                    await signInManager.PasswordSignInAsync(
                    user, details.Password, false, false);

                    if (result.Succeeded)
                    {

                        var payload = new LoginModel
                        {
                            Email = details.Email,
                            Password = details.Password,
                        };

                        using (var httpClient = new HttpClient())
                        {
                            StringContent content = new StringContent(JsonConvert.SerializeObject(payload), Encoding.UTF8, "application/json");

                            string test = _appSettings.WebApiUri + "api/account/login";
                            Console.WriteLine(test);
                            using (var response = await httpClient.PostAsync(_appSettings.WebApiUri+ "api/account/login", content))
                            {
                                string apiResponse = await response.Content.ReadAsStringAsync();
                                Console.WriteLine(apiResponse);
                                HttpContext.Session.SetString("JWT", apiResponse);

                            }
                        }

                        //If login success, store the email to the session variable
                        //HttpContext.Session.SetString("SessionEmail", details.Email);           
                        // redirect the user to the returnUrl location if it is true and if it is false, add a validation error and redisplay the Login view to the user so they can try again.
                        return Redirect(returnUrl ?? "/");

                    }
                }
                // If it is invalid
                ModelState.AddModelError(nameof(LoginModel.Email),
                "Invalid email or password");
            }
            return View(details);
        }

        [AllowAnonymous]
        public IActionResult AccessDenied()
        {
            return View();
        }
    }
}