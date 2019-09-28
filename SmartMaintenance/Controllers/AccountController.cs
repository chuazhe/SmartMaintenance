using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SmartMaintenance.Models;

namespace SmartMaintenance.Controllers
{
    public class AccountController : Controller
    {
        private UserManager<AppUser> userManager;
        private SignInManager<AppUser> signInManager;

        //Constructor
        public AccountController(UserManager<AppUser> userMgr,
        SignInManager<AppUser> signinMgr)
        {
            userManager = userMgr;
            signInManager = signinMgr;
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