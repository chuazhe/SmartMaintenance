#pragma checksum "C:\Users\User\source\repos\SmartMaintenance\SmartMaintenance\Views\Plan\Details.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "dedc4f8a5eaebb246b653da31c38fcddb62a5df7"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Plan_Details), @"mvc.1.0.view", @"/Views/Plan/Details.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Plan/Details.cshtml", typeof(AspNetCore.Views_Plan_Details))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"dedc4f8a5eaebb246b653da31c38fcddb62a5df7", @"/Views/Plan/Details.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b1e5456d7567e48a73e0ef938c2053e9a37a380d", @"/Views/_ViewImports.cshtml")]
    public class Views_Plan_Details : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/maintenancedetail.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "C:\Users\User\source\repos\SmartMaintenance\SmartMaintenance\Views\Plan\Details.cshtml"
  
    ViewData["Title"] = "MP"+ ViewContext.RouteData.Values["Id"];

#line default
#line hidden
            BeginContext(74, 83, true);
            WriteLiteral("\r\n<div class=\"text-center\">\r\n    <h1 class=\"display-4\">\r\n        Maintenance Id: MP");
            EndContext();
            BeginContext(159, 34, false);
#line 7 "C:\Users\User\source\repos\SmartMaintenance\SmartMaintenance\Views\Plan\Details.cshtml"
                      Write(ViewContext.RouteData.Values["Id"]);

#line default
#line hidden
            EndContext();
            BeginContext(194, 23, true);
            WriteLiteral("\r\n    </h1>\r\n</div>\r\n\r\n");
            EndContext();
            BeginContext(217, 49, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "dedc4f8a5eaebb246b653da31c38fcddb62a5df74619", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(266, 537, true);
            WriteLiteral(@"


<div class=""container-fluid"">
    <table class='table table-bordered table-condensed table-striped table-hover' id=""tableMaintenanceDetails"" style=""display:none;"">
        <tr><th>Aircraft Id</th><th>Maintenance Date</th></tr>
    </table>
</div>

<div class=""container-fluid"">
    <table class='table table-bordered table-condensed table-striped table-hover' id=""tableMaintenancePart"" style=""display:none;"">
        <tr><th>Part Id</th><th>Part Name</th><th>Quantity</th></tr>
    </table>
</div>

<input type=""hidden""");
            EndContext();
            BeginWriteAttribute("value", " value=\'", 803, "\'", 846, 1);
#line 26 "C:\Users\User\source\repos\SmartMaintenance\SmartMaintenance\Views\Plan\Details.cshtml"
WriteAttributeValue("", 811, ViewContext.RouteData.Values["id"], 811, 35, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(847, 20, true);
            WriteLiteral(" id=\"routeDataId\" />");
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
