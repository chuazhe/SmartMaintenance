#pragma checksum "C:\Users\User\source\repos\SmartMaintenance\SmartMaintenance\Views\Aircraft\Details.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "0b0701559b1cd5a42ff9a3b9df4e78d3863baa7e"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Aircraft_Details), @"mvc.1.0.view", @"/Views/Aircraft/Details.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Aircraft/Details.cshtml", typeof(AspNetCore.Views_Aircraft_Details))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "C:\Users\User\source\repos\SmartMaintenance\SmartMaintenance\Views\_ViewImports.cshtml"
using SmartMaintenance;

#line default
#line hidden
#line 2 "C:\Users\User\source\repos\SmartMaintenance\SmartMaintenance\Views\_ViewImports.cshtml"
using SmartMaintenance.Models;

#line default
#line hidden
#line 3 "C:\Users\User\source\repos\SmartMaintenance\SmartMaintenance\Views\_ViewImports.cshtml"
using Microsoft.AspNetCore.Identity;

#line default
#line hidden
#line 5 "C:\Users\User\source\repos\SmartMaintenance\SmartMaintenance\Views\_ViewImports.cshtml"
using Microsoft.AspNetCore.Http;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"0b0701559b1cd5a42ff9a3b9df4e78d3863baa7e", @"/Views/Aircraft/Details.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b1e5456d7567e48a73e0ef938c2053e9a37a380d", @"/Views/_ViewImports.cshtml")]
    public class Views_Aircraft_Details : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(121, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(130, 69, true);
            WriteLiteral("\r\n<div class=\"text-center\">\r\n    <h1 class=\"display-4\"> Aircraft Id: ");
            EndContext();
            BeginContext(201, 34, false);
#line 8 "C:\Users\User\source\repos\SmartMaintenance\SmartMaintenance\Views\Aircraft\Details.cshtml"
                                    Write(ViewContext.RouteData.Values["Id"]);

#line default
#line hidden
            EndContext();
            BeginContext(236, 118, true);
            WriteLiteral("\r\n    </h1>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-6\">\r\n        <a class=\"btn btn-primary btn-block btn-lg\"");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 354, "\"", 438, 2);
            WriteAttributeValue("", 361, "https://localhost:44300/aircraft/manual/", 361, 40, true);
#line 14 "C:\Users\User\source\repos\SmartMaintenance\SmartMaintenance\Views\Aircraft\Details.cshtml"
WriteAttributeValue("", 401, ViewContext.RouteData.Values["Id"], 401, 37, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(439, 180, true);
            WriteLiteral("><i class=\"fa fa-10x fa-hand-paper\" id=\"predictManual\"></i><br/>Manual Prediction</a>\r\n    </div>\r\n    <div class=\"col-6\">\r\n        <button class=\"btn btn-primary btn-block btn-lg\"");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 619, "\"", 701, 2);
            WriteAttributeValue("", 626, "https://localhost:44300/aircraft/auto/", 626, 38, true);
#line 17 "C:\Users\User\source\repos\SmartMaintenance\SmartMaintenance\Views\Aircraft\Details.cshtml"
WriteAttributeValue("", 664, ViewContext.RouteData.Values["Id"], 664, 37, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(702, 217, true);
            WriteLiteral("><i class=\"fa fa-10x fa-robot\" id=\"predictAuto\"></i><br/>Auto Prediction (Demo or Sensor)</button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-6\">\r\n        <a class=\"btn btn-primary btn-block btn-lg\"");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 919, "\"", 999, 2);
            WriteAttributeValue("", 926, "https://localhost:44300/plan/create/", 926, 36, true);
#line 23 "C:\Users\User\source\repos\SmartMaintenance\SmartMaintenance\Views\Aircraft\Details.cshtml"
WriteAttributeValue("", 962, ViewContext.RouteData.Values["Id"], 962, 37, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(1000, 211, true);
            WriteLiteral(" style=\"margin-top:20px\"><i class=\"fa fa-10x fa-user-edit\" id=\"createMaintenancePlan\"></i><br />Make Maintenance Plan</a>\r\n    </div>\r\n    <div class=\"col-6\">\r\n        <a class=\"btn btn-primary btn-block btn-lg\"");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 1211, "\"", 1291, 2);
            WriteAttributeValue("", 1218, "https://localhost:44300/plan/create/", 1218, 36, true);
#line 26 "C:\Users\User\source\repos\SmartMaintenance\SmartMaintenance\Views\Aircraft\Details.cshtml"
WriteAttributeValue("", 1254, ViewContext.RouteData.Values["Id"], 1254, 37, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(1292, 128, true);
            WriteLiteral(" style=\"margin-top:20px\"><i class=\"fa fa-10x fa-wrench\" id=\"createMaintenancePlan\"></i><br />Maintenance</a>\r\n    </div>\r\n</div>");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public Microsoft.AspNetCore.Http.IHttpContextAccessor HttpContextAccessor { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591