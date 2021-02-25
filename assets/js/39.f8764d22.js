(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{398:function(t,s,a){"use strict";a.r(s);var n=a(40),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"automate-os-framework-patching-with-acr-tasks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automate-os-framework-patching-with-acr-tasks"}},[t._v("#")]),t._v(" Automate OS & Framework Patching with ACR Tasks")]),t._v(" "),a("p",[t._v("ACR Tasks provide a container centric compute primitive, focused on building and patching container workloads.")]),t._v(" "),a("p",[t._v("ACR Tasks are a series of steps representing execution of one or more containers, using the container as the execution environment. ACR Tasks are defined with a "),a("code",[t._v(".yaml")]),t._v(" file, identifying the steps and the dependencies each steps has upon another.")]),t._v(" "),a("p",[t._v("Through ACR Tasks, developers can:")]),t._v(" "),a("ul",[a("li",[a("strong",[a("RouterLink",{attrs:{to:"/tasks/container-registry-task-ref-build.html"}},[t._v("build")])],1),t._v(" containers using familiar syntax of "),a("code",[t._v("docker build")])]),t._v(" "),a("li",[a("strong",[a("RouterLink",{attrs:{to:"/tasks/container-registry-task-ref-push.html"}},[t._v("push")])],1),t._v(" newly built images to a registry, including ACR, Docker hub and other private registries.")]),t._v(" "),a("li",[a("strong",[a("RouterLink",{attrs:{to:"/tasks/container-registry-task-ref-cmd.html"}},[t._v("cmd")])],1),t._v(" to run a container as a function, enabling parameters passed to the container [ENTRYPOINT]. "),a("code",[t._v("cmd")]),t._v(" supports  run parameters including volumes and other familiar "),a("code",[t._v("docker run")]),t._v(" parameters, enabling unit and functional testing with concurrent container execution.")])]),t._v(" "),a("h2",{attrs:{id:"acr-build-and-acr-tasks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acr-build-and-acr-tasks"}},[t._v("#")]),t._v(" ACR Build and ACR Tasks")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://aka.ms/acr/build",target:"_blank",rel:"noopener noreferrer"}},[t._v("ACR Build"),a("OutboundLink")],1),t._v(", (generally available September 2018), is the pre-cursor of ACR Tasks, focusing on a single step that builds and optionally pushes the built image.")]),t._v(" "),a("p",[t._v("ACR Tasks adds the ability to break up the building of an image into more composable steps. With ACR Task steps, users have more granular control over building their images, while adding testing capabilities, all within the ACR Task compute environment.")]),t._v(" "),a("h2",{attrs:{id:"acr-task-common-scenarios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acr-task-common-scenarios"}},[t._v("#")]),t._v(" ACR Task Common Scenarios")]),t._v(" "),a("p",[t._v("The most common scenarios include:")]),t._v(" "),a("ul",[a("li",[t._v("Building, tagging and pushing 1 or more container images; in series or in parallel.")]),t._v(" "),a("li",[t._v("Running and capturing unit test and code coverage results.")]),t._v(" "),a("li",[t._v("Running and capturing functional tests. ACR Tasks supports running multiple container,s executing a series of requests between them.")]),t._v(" "),a("li",[t._v("Task based execution, including pre/post steps of a container build.")]),t._v(" "),a("li",[t._v("Deploying 1 or more containers with your favorite deployment engine to your target environment.")])]),t._v(" "),a("p",[t._v("ACR Tasks can be as simple as building a single image:")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.0.0\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("t "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(".Run.Registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(".Run.ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" .\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{.Run.Registry}}/hello-world:{{.Run.ID}}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("To more complex build, test, helm package, helm deploy scenarios:")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.0.0\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" build"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("web\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("t "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(".Run.Registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(".Run.ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" .\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("when")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" build"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("tests\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("t "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(".Run.Registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("tests ./funcTests\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("when")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" push\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{.Run.Registry}}/helloworld:{{.Run.ID}}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("when")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build-tests"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("web\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cmd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(".Run.Registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/helloworld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(".Run.ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" funcTests\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cmd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(".Run.Registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/helloworld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(".Run.ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" host=helloworld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("when")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello-world-web"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cmd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(".Run.Registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/functions/helm package "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("version "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(".Run.ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("d ./helm ./helm/helloworld/\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("when")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"funcTests"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cmd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(".Run.Registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/functions/helm upgrade helloworld ./helm/helloworld/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("reuse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("values "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("set helloworld.image="),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(".Run.Registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/helloworld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(".Run.ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])]),a("h2",{attrs:{id:"acr-tasks-support-the-3-primary-phases-of-development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acr-tasks-support-the-3-primary-phases-of-development"}},[t._v("#")]),t._v(" ACR Tasks Support the 3 Primary Phases of Development")]),t._v(" "),a("p",[t._v("ACR Tasks highlight 3 phases of container life cycle management.")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Inner Loop Development")]),t._v(" - Before developers git-commit their code, they can test their container builds and tasks with "),a("code",[t._v("az acr task run .")])]),t._v(" "),a("li",[a("strong",[t._v("Team based commits")]),t._v(" - Whether a team of 1, or 100, as git commits are made, tasks can be triggered for execution. See "),a("RouterLink",{attrs:{to:"/tasks/container-registry-task-create.html"}},[t._v("az acr task create")]),t._v(" for establishing trigger based execution.")],1),t._v(" "),a("li",[a("strong",[t._v("Post development, OS & Framework Patching")]),t._v(" - When developing and deploying containers, the means to patch a container involves rebuilding the image, testing and deploying the newly built and tested images. ACR Tasks support "),a("RouterLink",{attrs:{to:"/tasks/container-registry-task-create.html#BaseImageTriggers"}},[t._v("base image update triggers")]),t._v(", enabling a task to run as the runtime or buildtime dependent images are updated.")],1)]),t._v(" "),a("h2",{attrs:{id:"acr-tasks-support-simple-to-complex-workloads-integrating-with-ci-cd-solutions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acr-tasks-support-simple-to-complex-workloads-integrating-with-ci-cd-solutions"}},[t._v("#")]),t._v(" ACR Tasks Support Simple to Complex Workloads, Integrating with CI/CD Solutions")]),t._v(" "),a("p",[t._v("Many developers may find ACR Tasks meets their needs. As the complexity increases, or users which to integrate into their existing CI/CD solutions, ACR Tasks can be integrated with CI/CD pipelines getting the benefits of fast, cloud native container execution, with the robust capabilities of other CI/CD solutions.")]),t._v(" "),a("h3",{attrs:{id:"scoping-and-positioning-acr-tasks-with-other-azure-container-primitives"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scoping-and-positioning-acr-tasks-with-other-azure-container-primitives"}},[t._v("#")]),t._v(" Scoping and Positioning ACR Tasks With Other Azure Container Primitives")]),t._v(" "),a("p",[t._v("As containers continue to become the "),a("a",{attrs:{href:"https://blogs.msdn.microsoft.com/stevelasker/2016/05/26/docker-containers-as-the-new-binaries-of-deployment/",target:"_blank",rel:"noopener noreferrer"}},[t._v("common unit of custom and ISV code deployment"),a("OutboundLink")],1),t._v(", Azure container hosting continues to expand. ACR Tasks are intended to fill a gap between ACI, AKS, Batch, App Services and other Azure Services. ACR Tasks are focused on short lived execution, with multi-tenant isolation capabilities. Customers building and testing their containers should have performance similar to local builds. This includes task execution queuing, scheduling, streaming of logs.")]),t._v(" "),a("blockquote",[a("p",[t._v("Note: performance will continue to increase as other features come online.")])]),t._v(" "),a("p",[t._v("However, we don't know what we don't know, and we seek your feedback:")]),t._v(" "),a("h2",{attrs:{id:"acr-tasks-preview-feedback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acr-tasks-preview-feedback"}},[t._v("#")]),t._v(" ACR Tasks Preview Feedback")]),t._v(" "),a("p",[t._v("ACR Tasks evolved from the container life cycle management efforts, focusing on "),a("a",{attrs:{href:"https://blogs.msdn.microsoft.com/stevelasker/2017/12/20/os-framework-patching-with-docker-containers-paradigm-shift/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OS & Framework patching of containers"),a("OutboundLink")],1),t._v(". For containers to evolve past the complexity of patching and testing virtual machines, ACR Build required the ability to run test containers. As we explored various options, we focused on the simplicity of running a container, passing in arguments and letting the developer choose what and how they wish to run their tests. The ability to run containers, for short lived bursts, at cloud scale is core to ACR Tasks. This primitive has exposed other possibilities and we seek your feedback.")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://aka.ms/acr/roadmap",target:"_blank",rel:"noopener noreferrer"}},[t._v("Roadmap"),a("OutboundLink")],1),t._v(" - for visibility into our planned work")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://aka.ms/acr/uservoice",target:"_blank",rel:"noopener noreferrer"}},[t._v("UserVoice"),a("OutboundLink")],1),t._v(" - to vote for existing requests, or create a new request")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://aka.ms/acr/feedback",target:"_blank",rel:"noopener noreferrer"}},[t._v("Feedback"),a("OutboundLink")],1),t._v(" - to provide feedback, engage in discussion with the community")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://aka.ms/acr/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("Issues"),a("OutboundLink")],1),t._v(" - to view existing bugs and issues, logging new ones")])]),t._v(" "),a("h2",{attrs:{id:"next-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next steps")]),t._v(" "),a("p",[t._v("To learn more about ACR Tasks, drill into the following topics:")]),t._v(" "),a("blockquote",[a("p",[t._v('[!div class="nextstepaction"]')])]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/tasks/container-registry-tasks-walkthrough.html"}},[t._v("ACR Task Walkthrough")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/tasks/container-registry-ref-acr-tasks-yaml.html"}},[t._v("ACR task.yaml Reference")])],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);