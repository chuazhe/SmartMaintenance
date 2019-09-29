using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using SmartMaintenance.Models;

namespace SmartMaintenance.Controllers
{
    [Authorize(Roles = "Admin")]
    public class AdminController : Controller
    {
        private UserManager<AppUser> userManager;

        // Constructor
        /* When MVC needs to create an instance of the view component class, it will note the need to provide this argument and inspect the configuration in the Startup class to determine which implementation object should be used. */
        public AdminController(UserManager<AppUser> usrMgr)
        {
            userManager = usrMgr;
        }


        //[Authorize]
        public ViewResult Index() => View(userManager.Users);

        //Without Authorize, U can get in anonymously
        public ViewResult Create() => View();

        // Respond to POST
        [HttpPost]
        public async Task<IActionResult> Create(CreateModel model)
        {
            if (ModelState.IsValid)
            {
                AppUser user = new AppUser
                {

                    UserName = model.Email,
                    Email = model.Email
                };
                IdentityResult result
                = await userManager.CreateAsync(user, model.Password);

                if (result.Succeeded)
                {
                    return RedirectToAction("Index");
                }
                else
                {
                    foreach (IdentityError error in result.Errors)
                    {
                        ModelState.AddModelError("", error.Description);
                    }
                }
            }
            return View(model);
        }

    }
}