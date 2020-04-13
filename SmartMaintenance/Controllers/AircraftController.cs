using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SmartMaintenance.Controllers
{
    [Authorize]
    public class AircraftController : Controller
    {
        // GET: Aircraft
        public ActionResult Index()
        {
            return View();
        }

        // GET: Aircraft/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Aircraft/Details/5
        public ActionResult Manual(int id)
        {
            return View();
        }

        // GET: Aircraft/Details/5
        public ActionResult Auto(int id)
        {
            return View();
        }

        // GET: Aircraft/Create
        public ActionResult Create()
        {
            return View();
        }

        // GET: Aircraft/Create
        public ActionResult Generate()
        {
            return View();
        }

        // GET: Aircraft/Create
        public ActionResult AddEngine()
        {
            return View();
        }

        // GET: Aircraft/Create
        public ActionResult RemoveEngine()
        {
            return View();
        }

        // POST: Aircraft/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: Aircraft/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Aircraft/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: Aircraft/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Aircraft/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}