#pragma checksum "C:\Users\User\source\repos\SmartMaintenance\SmartMaintenance\Views\Aircraft\Details.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "af41695c8388236269cf35fbe77329e3764396b1"
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"af41695c8388236269cf35fbe77329e3764396b1", @"/Views/Aircraft/Details.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b1e5456d7567e48a73e0ef938c2053e9a37a380d", @"/Views/_ViewImports.cshtml")]
    public class Views_Aircraft_Details : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/aircraftdetail.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("type", new global::Microsoft.AspNetCore.Html.HtmlString("text/javascript"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 1 "C:\Users\User\source\repos\SmartMaintenance\SmartMaintenance\Views\Aircraft\Details.cshtml"
  
    ViewData["Title"] = "Aircraft "+ ViewContext.RouteData.Values["Id"];

#line default
#line hidden
            BeginContext(81, 80, true);
            WriteLiteral("\r\n<div class=\"text-center\">\r\n    <h1 class=\"display-4\">\r\n        Aircraft Id: AR");
            EndContext();
            BeginContext(163, 34, false);
#line 7 "C:\Users\User\source\repos\SmartMaintenance\SmartMaintenance\Views\Aircraft\Details.cshtml"
                   Write(ViewContext.RouteData.Values["Id"]);

#line default
#line hidden
            EndContext();
            BeginContext(198, 23, true);
            WriteLiteral("\r\n    </h1>\r\n</div>\r\n\r\n");
            EndContext();
            BeginContext(221, 69, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "af41695c8388236269cf35fbe77329e3764396b15007", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(290, 342, true);
            WriteLiteral(@"

<div class=""container-fluid"">
    <table class='table table-bordered table-condensed table-striped table-hover' id=""tableAircraftPart"" style=""display:none;"">
        <tr><th>Engine Id</th><th>Engine Name</th></tr>
    </table>
</div>


<div class=""row"">
    <div class=""col-6"">
        <a class=""btn btn-primary btn-block btn-lg""");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 632, "\"", 716, 2);
            WriteAttributeValue("", 639, "https://localhost:44300/aircraft/manual/", 639, 40, true);
#line 22 "C:\Users\User\source\repos\SmartMaintenance\SmartMaintenance\Views\Aircraft\Details.cshtml"
WriteAttributeValue("", 679, ViewContext.RouteData.Values["Id"], 679, 37, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(717, 176, true);
            WriteLiteral("><i class=\"fa fa-10x fa-hand-paper\" id=\"predictManual\"></i><br />Manual Prediction</a>\r\n    </div>\r\n    <div class=\"col-6\">\r\n        <a class=\"btn btn-primary btn-block btn-lg\"");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 893, "\"", 979, 2);
            WriteAttributeValue("", 900, "https://localhost:44300/aircraft/generate/", 900, 42, true);
#line 25 "C:\Users\User\source\repos\SmartMaintenance\SmartMaintenance\Views\Aircraft\Details.cshtml"
WriteAttributeValue("", 942, ViewContext.RouteData.Values["Id"], 942, 37, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(980, 232, true);
            WriteLiteral("><i class=\"fa fa-10x fa-robot\" id=\"predictAuto\" onclick=\"autoPredict()\"></i><br />Auto Prediction (Demo only)</a>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-6\">\r\n        <a class=\"btn btn-primary btn-block btn-lg\"");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 1212, "\"", 1292, 2);
            WriteAttributeValue("", 1219, "https://localhost:44300/plan/create/", 1219, 36, true);
#line 31 "C:\Users\User\source\repos\SmartMaintenance\SmartMaintenance\Views\Aircraft\Details.cshtml"
WriteAttributeValue("", 1255, ViewContext.RouteData.Values["Id"], 1255, 37, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(1293, 211, true);
            WriteLiteral(" style=\"margin-top:20px\"><i class=\"fa fa-10x fa-user-edit\" id=\"createMaintenancePlan\"></i><br />Make Maintenance Plan</a>\r\n    </div>\r\n    <div class=\"col-6\">\r\n        <a class=\"btn btn-primary btn-block btn-lg\"");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 1504, "\"", 1584, 2);
            WriteAttributeValue("", 1511, "https://localhost:44300/plan/finish/", 1511, 36, true);
#line 34 "C:\Users\User\source\repos\SmartMaintenance\SmartMaintenance\Views\Aircraft\Details.cshtml"
WriteAttributeValue("", 1547, ViewContext.RouteData.Values["Id"], 1547, 37, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(1585, 654, true);
            WriteLiteral(@" style=""margin-top:20px""><i class=""fa fa-10x fa-clipboard-check"" id=""finishMaintenancePlan""></i><br />Finish Maintenance Plan</a>
    </div>
</div>

<div class=""row"">

    <div class=""col-6"">
        <a class=""btn btn-primary btn-block btn-lg"" href=""#"" style=""margin-top:20px""><i class=""fa fa-10x fa-wrench"" onclick=""changeToMaintenance()""></i><br />Change to Maintenance</a>
    </div>
    <div class=""col-6"">
        <a class=""btn btn-primary btn-block btn-lg"" href=""#"" style=""margin-top:20px""><i class=""fa fa-10x fa-plane-departure"" onclick=""changeToInService()""></i><br />Change to In Service</a>
    </div>
</div>

<input type=""hidden""");
            EndContext();
            BeginWriteAttribute("value", " value=\'", 2239, "\'", 2282, 1);
#line 48 "C:\Users\User\source\repos\SmartMaintenance\SmartMaintenance\Views\Aircraft\Details.cshtml"
WriteAttributeValue("", 2247, ViewContext.RouteData.Values["id"], 2247, 35, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(2283, 22, true);
            WriteLiteral(" id=\"routeDataId\" />\r\n");
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
