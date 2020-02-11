using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SmartMaintenance.Controllers
{
    public class ApproveController : Controller
    {
        // GET: Approve
        public ActionResult Index()
        {
            return View();
        }

        // GET: Approve/Details/5
        public ActionResult Confirm()
        {
            return View();
        }

        // GET: Approve/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Approve/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Approve/Create
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

        // GET: Approve/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Approve/Edit/5
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

        // GET: Approve/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Approve/Delete/5
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