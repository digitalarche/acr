(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{383:function(e,a,s){"use strict";s.r(a);var t=s(40),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"getting-started-with-aks-project-teleport"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-aks-project-teleport"}},[e._v("#")]),e._v(" Getting Started with AKS & Project Teleport")]),e._v(" "),s("blockquote",[s("p",[e._v("Note: this is a first draft, to get folks started.")])]),e._v(" "),s("p",[e._v("To get a sense of the performance benefits of Project Teleport two deployments will be made.")]),e._v(" "),s("p",[e._v("Project Teleport is node specific. If an image is pulled to a node, with teleport enabled, the expanded layers are mounted.\nIf a second copy of the same image is pulled to the same node, even if pulled from a non-teleport expanded repository, the node will identify the image is the same and mount the layers from the previously pulled and teleport expanded image.")]),e._v(" "),s("p",[e._v("To test the same image with and without Project Teleport enabled, two additional nodepools will be created. The additional nodepools will enable clearing any cached images and layers by scaling the nodepool to zero, then back to one.")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("nodepool1")]),e._v(" - The system nodepool. No workloads will be scheduled here.")]),e._v(" "),s("li",[s("code",[e._v("teleporter")]),e._v(" - A teleport enabled nodepool, with a single node")]),e._v(" "),s("li",[s("code",[e._v("shuttle")]),e._v(" - The standard method of transport of container images, with a single node.")])]),e._v(" "),s("h2",{attrs:{id:"aks-project-teleport-preview-2-0-limitations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aks-project-teleport-preview-2-0-limitations"}},[e._v("#")]),e._v(" AKS & Project Teleport Preview 2.0 Limitations")]),e._v(" "),s("ul",[s("li",[e._v("AKS must be configured with service principals. While AKS and ACR support managed identities, the expanded mounts do not yet support managed identities. This should be deployed shortly.")]),e._v(" "),s("li",[e._v("k8s version 1.19.7 or later is required, as Project Teleport depends on containerd.")]),e._v(" "),s("li",[e._v("ACR and AKS must be in the same regions. This is less of a limitation, rather a design constraint. It's always a best practice to have the content required for deployment to be within the same region. Project Teleport depends on this standard to mount layers within an Azure network, regional boundary.")]),e._v(" "),s("li",[e._v("To manage storage costs, geo-replication is not yet supported. The ACR must be created in the same region as the AKS cluster. Future versions will support geo-replication.")]),e._v(" "),s("li",[e._v("VNet support is not yet enabled.")])]),e._v(" "),s("h2",{attrs:{id:"set-environment-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-environment-variables"}},[e._v("#")]),e._v(" Set environment variables")]),e._v(" "),s("p",[e._v("Configure variables unique to your environment. Note the ACR and AKS instances must both be in one of the "),s("RouterLink",{attrs:{to:"/teleport/#preview-constraints"}},[e._v("teleport supported regions")]),e._v(".")],1),e._v(" "),s("div",{staticClass:"language-azurecli-interactive line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("AKS=myaks\nAKS_RG=${AKS}-rg\nRG_LOCATION=westus2\nK8S_VERSION=1.19.7\nACR=myacr\nACR_URL=${ACR}.azurecr.io\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("h2",{attrs:{id:"create-an-aks-cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-an-aks-cluster"}},[e._v("#")]),e._v(" Create an AKS Cluster")]),e._v(" "),s("p",[e._v("At the current moment, Teleport does not yet support managed identity access to teleport expanded layers. Until managed identities are supported, configure the cluster with a service principal.")]),e._v(" "),s("div",{staticClass:"language-azurecli-interactive line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("SP_PWD=$(\n  az ad sp create-for-rbac \\\n  --skip-assignment \\\n  --name ${AKS}-sp \n  --query password -o tsv)\n\naz aks create \\\n    -g ${AKS_RG} \\\n    -n ${AKS} \\\n    --attach-acr $ACR \\\n    --kubernetes-version ${K8S_VERSION} \\\n    -l $RG_LOCATION \\\n    --service-principal $(az ad sp show \\\n        --id http://${AKS}-sp \\\n        --query appId \\\n        --output tsv) \\\n    --client-secret $SP_PWD\n\naz aks get-credentials \\\n    -g ${AKS_RG} \\\n    -n ${AKS}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br")])]),s("p",[e._v("A standard AKS cluster should now exist. Verify with:")]),e._v(" "),s("div",{staticClass:"language-azurecli-interactive line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("kubectl get nodes\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"import-an-image-for-teleportation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-an-image-for-teleportation"}},[e._v("#")]),e._v(" Import an image for teleportation")]),e._v(" "),s("p",[e._v("For completeness of this walkthrough, the azure-vote application is used, which includes a 944mb "),s("code",[e._v("azure-vote-front:v1")]),e._v(" image. To expand the layers, import the images into a teleport enabled registry, in the same region as the AKS cluster.")]),e._v(" "),s("div",{staticClass:"language-azurecli-interactive line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("az acr import \\\n  --source mcr.microsoft.com/azuredocs/azure-vote-front:v1 \\\n  --name $ACR \\\n  --image azure-vote-front:v1\n\naz acr import \\\n  --source mcr.microsoft.com/oss/bitnami/redis:6.0.8 \\\n  --name $ACR \\\n  --image redis:6.0.8\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("h2",{attrs:{id:"confirm-import-and-teleport-expansion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#confirm-import-and-teleport-expansion"}},[e._v("#")]),e._v(" Confirm import and teleport expansion")]),e._v(" "),s("p",[e._v("Confirm the "),s("code",[e._v("azure-vote-front")]),e._v(" repository is set for teleport expansion:")]),e._v(" "),s("div",{staticClass:"language-azurecli line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("az acr repository show \\\n  --repository azure-vote-front \\\n  -o jsonc\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("Look for "),s("code",[e._v('"teleportEnabled": true,')]),e._v(" in the output")]),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"changeableAttributes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"deleteEnabled"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"listEnabled"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"readEnabled"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"teleportEnabled"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"writeEnabled"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("p",[e._v("Although the repository is configured for teleport expansion, each image upload will take time to be expanded on push. The length of time is based on the quantity and size of layers, however the expansion should be completed within seconds.")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("Note:")]),e._v(" ACR webhooks indicate when an artifact is pushed and available. A new webhook notification will be added at a future date to indicate the image has been expanded, and ready for teleportation.")])]),e._v(" "),s("p",[e._v("At this point in the Teleport preview, check expansion using the "),s("code",[e._v("check-expansion.sh")]),e._v(" script. As the script uses a "),s("code",[e._v("/mount")]),e._v(" api, basic auth is required. An "),s("a",{attrs:{href:"https://aka.ms/acr/tokens",target:"_blank",rel:"noopener noreferrer"}},[e._v("ACR Token"),s("OutboundLink")],1),e._v(" is created and saved as environment variable.")]),e._v(" "),s("div",{staticClass:"language-azurecli-interactive line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("export ACR_USER=teleport-token\nexport ACR_PWD=$(az acr token create \\\n  --name teleport-token \\\n  --registry $ACR \\\n  --repository azure-vote-front \\\n  content/read \\\n  --query credentials.passwords[0].value -o tsv)\n\n../check-expansion.sh teleport azure-vote-front v1\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("h2",{attrs:{id:"add-nodes-for-teleporters-and-shuttles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-nodes-for-teleporters-and-shuttles"}},[e._v("#")]),e._v(" Add nodes for teleporters and shuttles")]),e._v(" "),s("p",[e._v("Two nodepools will be added to enable teleportation, and a comparison for standard transport. The system nodepool is avoided to enable clearing the image cache by scaling the nodepool to zero then back to one.")]),e._v(" "),s("div",{staticClass:"language-azurecli-interactive line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("az aks nodepool add \\\n  --resource-group $AKS_RG \\\n  --cluster-name $AKS \\\n  --name teleporter \\\n  --node-count 1 \\\n  --aks-custom-headers EnableACRTeleport=true \\\n  --labels acr-teleport=enabled\n\naz aks nodepool add \\\n  --resource-group $AKS_RG \\\n  --cluster-name $AKS \\\n  --name shuttle \\\n  --node-count 1 \\\n  --labels acr-teleport=disabled\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br")])]),s("h2",{attrs:{id:"deploy-to-aks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deploy-to-aks"}},[e._v("#")]),e._v(" Deploy to AKS")]),e._v(" "),s("p",[e._v("Update the "),s("code",[e._v("azure-vote-teleport.yaml")]),e._v(" and "),s("code",[e._v("azure-vote-shuttle.yaml")]),e._v(" files to reference your registry name:")]),e._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("...")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" azure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("vote"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("back\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" <registryName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v(".azurecr.io/redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("6.0.8\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("...")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" azure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("vote"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("front\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" <registryName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v(".azurecr.io/azure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("vote"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("front"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("v1\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("h3",{attrs:{id:"deploy-with-standard-pull-performance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deploy-with-standard-pull-performance"}},[e._v("#")]),e._v(" Deploy with standard pull performance")]),e._v(" "),s("p",[e._v("Deploy the "),s("em",[e._v("shuttle")]),e._v(" podspec:")]),e._v(" "),s("div",{staticClass:"language-azurecli-interactive line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("kubectl apply -f azure-vote-shuttle.yaml\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Get the list of pods to find the azure-vote-front pod. The shorthand version can be used if only one pod is named "),s("code",[e._v("azure-vote-front")]),e._v(". You may need to run the command a few times until the image has been pulled and expanded on the node.")]),e._v(" "),s("div",{staticClass:"language-azurecli-interactive line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("kubectl get pods\nkubectl describe pod azure-vote-front\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("Under the "),s("code",[e._v("events")]),e._v(" list, an entry for "),s("code",[e._v("Successfully pulled image...")]),e._v(" provides the pull time. Note the length before proceeding to the teleport version.")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("Events:\n  Type    Reason     Age   From               Message\n  ----    ------     ----  ----               -------\n  Normal  Scheduled  36s   default-scheduler  Successfully assigned default/azure-vote-front-5c976dbbd9-tckdz to aks-shuttle-10583637-vmss000000\n  Normal  Pulling    35s   kubelet            Pulling image "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"teleport.azurecr.io/azure-vote-front:v1"')]),e._v("\n  Normal  Pulled     1s    kubelet            Successfully pulled image "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"teleport.azurecr.io/azure-vote-front:v1"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("34")]),e._v(".738162s\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[e._v("If "),s("code",[e._v("already present on machine")]),e._v(" is returned, this indicates the image was previously pulled and cached. See "),s("a",{attrs:{href:"#cleanup"}},[e._v("recycle nodepool")]),e._v(" to clear the cache.")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("Events:\n  Type    Reason     Age    From               Message\n  ----    ------     ----   ----               -------\n  Normal  Scheduled  2m12s  default-scheduler  Successfully assigned default/azure-vote-front-5bdfc85f9c-d7z8b to aks-shuttle-10583637-vmss000000\n  Normal  Pulled     2m11s  kubelet            Container image "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"teleport.azurecr.io/azure-vote-front:v1"')]),e._v(" already present on machine\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h3",{attrs:{id:"deploy-with-teleport-performance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deploy-with-teleport-performance"}},[e._v("#")]),e._v(" Deploy with Teleport performance")]),e._v(" "),s("p",[e._v("Deploy the "),s("em",[e._v("teleport")]),e._v(" podspec:")]),e._v(" "),s("div",{staticClass:"language-azurecli-interactive line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("kubectl apply -f azure-vote-teleport.yaml\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Get the list of pods to find the azure-vote-front pod. The shorthand version can be used if only one pod is named "),s("code",[e._v("azure-vote-front")]),e._v(". You may need to run the command a few times until the image has been pulled and expanded on the node.")]),e._v(" "),s("div",{staticClass:"language-azurecli-interactive line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("kubectl describe pod azure-vote-front-teleport\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Under the "),s("code",[e._v("events")]),e._v(" list, an entry for "),s("code",[e._v("Successfully pulled image...")]),e._v(" provides the pull time. Note the length should be dramatically faster.")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("Events:\n  Type    Reason     Age   From               Message\n  ----    ------     ----  ----               -------\n  Normal  Scheduled  12s   default-scheduler  Successfully assigned default/azure-vote-front-teleport-5bf865d976-lm4bj to aks-teleporter-10583637-vmss000000\n  Normal  Pulling    11s   kubelet            Pulling image "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"teleport.azurecr.io/azure-vote-front:v1"')]),e._v("\n  Normal  Pulled     3s    kubelet            Successfully pulled image "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"teleport.azurecr.io/azure-vote-front:v1"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v(".011045191s\n  Normal  Created    3s    kubelet            Created container azure-vote-front-teleport\n  Normal  Started    3s    kubelet            Started container azure-vote-front-teleport\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("h3",{attrs:{id:"cleanup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cleanup"}},[e._v("#")]),e._v(" Cleanup")]),e._v(" "),s("p",[e._v("To reset the nodes, delete the two deployments:")]),e._v(" "),s("div",{staticClass:"language-azurecli-interactive line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("kubectl delete -f azure-vote-teleport.yaml\nkubectl delete -f azure-vote-shuttle.yaml\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("Clear the image cache, and any teleport mounts:")]),e._v(" "),s("div",{staticClass:"language-azurecli-interactive line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("az aks scale \\\n  --resource-group $AKS_RG \\\n  --name $AKS \\\n  --nodepool-name teleporter \\\n  --node-count 0\n\naz aks scale \\\n  --resource-group $AKS_RG \\\n  --name $AKS \\\n  --nodepool-name shuttle \\\n  --node-count 0\n\naz aks scale \\\n  --resource-group $AKS_RG \\\n  --name $AKS \\\n  --nodepool-name teleporter \\\n  --node-count 1\n\naz aks scale \\\n  --resource-group $AKS_RG \\\n  --name $AKS \\\n  --nodepool-name shuttle \\\n  --node-count 1\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br")])]),s("h2",{attrs:{id:"performance-profile-of-teleport"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#performance-profile-of-teleport"}},[e._v("#")]),e._v(" Performance profile of teleport")]),e._v(" "),s("p",[e._v("The Voting app has a significant performance delta, comparing a normal pull time of 34.7 seconds, with 8.0 seconds of teleport. While impressive, you may have assumed a larger difference.")]),e._v(" "),s("p",[e._v("Teleport prototype-1 is based on mounting expanded layers. For each layer of an image, the decompression of a layer is traded off for a mount. Therefore, the larger the layer count, the slightly longer the start time.")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("azure-vote-front")]),e._v(" image has 29 layers, which requires 29 mounts. When pulling the image without teleport, the 944mb of content must be decompressed, but multiple decompression threads can run concurrently.")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("docker inspect teleport.azurecr.io/azure-vote-front:v1\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"RootFS"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Type"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"layers"')]),e._v(",\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Layers"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:e27a10675c5656bafb7bfa9e4631e871499af0a5ddfda3cebc0ac401dfe19382"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:851f3e348c69d8959d326f0bab975c03f9813eec33aba389aa7c569953510433"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:06f4de5fefeae30802d336e8c234b9c0989542fb80efd4f83be06c41aba26d9f"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:b31411566900643c38169980a21093c23e0a12a12ffea78b1921d07dd40372bd"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:6662dddae6aa455371366ed12400556a29e049373ea27c089a24634e3098cb48"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:4ea12feed6a9386d7bdac8b26073b1209f0f39781a5d157026dfb5a918c95db7"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:e7cee6196d865755606c73b82004784273cd423217cba8faf650b6707d3b5059"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:b15d32f8b6aa975b8be84e825952094d2f20296777a2bb5fad3fb270ca05a776"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:5e8efc7c6f4fee7fecfc685b742293a5300cc3180262a144a2fed54c46597129"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:4f6e0a34a0535f5cd6b76d06aae861c3ced179b3b115d2850af0e2f0bcefeffc"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:5ac43729c58be5ecb0fc13b164fb4f06f0afc13394735e8ac10cdb0f75311195"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:491bd929c5bfcb0639a6c43d07be0aac225dc0da28379e99f617480599825e5f"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:b18e79d2742360b7b0d81493e8a8beced51953c8a8f73fe4b228e47e8aeb292b"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:55ebcfb2ad17cafdada768b6ca43e3f4e51bc589757b22337b94a499354aa052"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:1a350e9420b7eac6b50172334afd6354d89749c62822951596bac9085cb9fb1e"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:7b3929993879466a3abee028d3fb490d83c211ab5723e29765ed17c98db5b4e3"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:ddeb470c209923815a410d35dd45a6710bc285955b5ef30d92a003d38bd68f3b"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:c30da5f5d23cec0997d05337dd1113872ba56b38a59bf96922572f07d65b94a0"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:a7364327f2826e4991e3675271350c9e7b858e33abbe77aacfbbff00a4b59455"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:f8af872e501840a2de13260830960f612560d9ee755ae07a37c30758e8568444"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:57fe04427c69233864b729d60d3c9c7fe8a43e950cb442a650101a357998c8c2"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:cde1a4e95d8bea636972733fde8f223d1dda2c2425ec7de8ca5b078391723c11"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:efa870440d9c6defc6447ad9d3d214312ba3dc0c665c723b793d14d241d811e1"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:a9f64da753644ba8e18846cb23010c8e730de34701b5f519591167722a89784b"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:2131d41261d2d13cae8b024c5a20e65fe8ee8f98d04bfd238124210b94115d69"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:9d93163e41ffdad4659db82f267091b4a478f1235be1b25438407e79e80ed28b"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:d9aeb057eef2070b1260cceeefb0933755f62504cf34efe2bf4f113043bf7493"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:5e85a99d34e4a9aea5bdc845fb30587b172393ebf7d71ddbb1b325e3fa728090"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sha256:ab48c9fa73df063cfafaa0338c06ec44ba3d29a3ce6adde3fedf42d2d0c0ee91"')]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br")])]),s("p",[e._v("While you might consider flattening your images to one layer for fast mounting, while that would help, you may have contention on a single mount point. The purpose of the Teleport preview is to get further metrics on the usage to understand the art and science of image layers. The Teleport design does not require an image owner to make changes to use Teleport. Teleport works with your existing container images. However, with each technology, there are always optimizations that may be made based on the deployment target.")]),e._v(" "),s("p",[e._v("One thing is always common about image performance. The smaller you can make your overall container image, the faster it will run.")])])}),[],!1,null,null,null);a.default=n.exports}}]);