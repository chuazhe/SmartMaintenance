#pragma checksum "C:\Users\User\source\repos\SmartMaintenance\SmartMaintenance\Views\Inventory\Create.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "b52afe47a4d09afb905dc4ba73a8f3329593049d"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Inventory_Create), @"mvc.1.0.view", @"/Views/Inventory/Create.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Inventory/Create.cshtml", typeof(AspNetCore.Views_Inventory_Create))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b52afe47a4d09afb905dc4ba73a8f3329593049d", @"/Views/Inventory/Create.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b1e5456d7567e48a73e0ef938c2053e9a37a380d", @"/Views/_ViewImports.cshtml")]
    public class Views_Inventory_Create : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/addpart.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "C:\Users\User\source\repos\SmartMaintenance\SmartMaintenance\Views\Inventory\Create.cshtml"
  
    ViewData["Title"] = "Create Part";

#line default
#line hidden
            BeginContext(47, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(49, 62, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b52afe47a4d09afb905dc4ba73a8f3329593049d4481", async() => {
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
            BeginContext(111, 148, true);
            WriteLiteral("\r\n\r\n\r\n<div class=\"container\" style=\"border-style: solid;\">\r\n    <div class=\"text-center\">\r\n        <h1 class=\"display-4\">\r\n            Aircraft Id: ");
            EndContext();
            BeginContext(261, 34, false);
#line 11 "C:\Users\User\source\repos\SmartMaintenance\SmartMaintenance\Views\Inventory\Create.cshtml"
                     Write(ViewContext.RouteData.Values["Id"]);

#line default
#line hidden
            EndContext();
            BeginContext(296, 367, true);
            WriteLiteral(@"
        </h1>

        <div class=""row"">
            <div class=""col-1"">
                <label>Part Name:</label>
            </div>

            <div class=""col-2"">
                <button type=""submit"" class=""btn btn-primary"" onclick=""productAddToTable()"">Add</button>
            </div>
        </div>


    </div>
</div>


<input type=""hidden""");
            EndContext();
            BeginWriteAttribute("value", " value=\'", 663, "\'", 706, 1);
#line 29 "C:\Users\User\source\repos\SmartMaintenance\SmartMaintenance\Views\Inventory\Create.cshtml"
WriteAttributeValue("", 671, ViewContext.RouteData.Values["id"], 671, 35, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(707, 20, true);
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