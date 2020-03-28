using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmartMaintenance.Controllers
{
    [Authorize]
    public class EngineController : Controller
    {
        public IActionResult Index()
        {

            return View();

        }

        // GET: Aircraft/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        public IActionResult Add()
        {

            return View();

        }

        public IActionResult Delete()
        {

            return View();

        }
    }
    }
