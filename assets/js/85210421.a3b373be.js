(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{84:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),s=t(100),a=t(24);n.default=function(){return r.a.createElement(s.a,{title:"Report",description:"Report renderer"},r.a.createElement(a.a,null,r.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",integrity:"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",crossorigin:"anonymous"}),r.a.createElement("link",{rel:"stylesheet",href:"https://unpkg.com/frictionless-components/dist/frictionless-components.css"}),r.a.createElement("script",{src:"https://unpkg.com/frictionless-components/dist/frictionless-components.js"}),r.a.createElement("script",null,"\n          if (document.readyState === 'complete') location.reload()\n          if (document.readyState === 'loading') window.addEventListener(\"load\", () => {\n            const value = 'Z2hwXzVkQ3BTZUoxTURJNlF3MzlwOWlqVmlxU2YwcnpnaTNSVklBcA=='\n            const params = new URLSearchParams(window.location.search)\n            const user = params.get('user')\n            const repo = params.get('repo')\n            const flow = params.get('flow')\n            const run = params.get('run')\n            const callback = (error, {user, repo, flow, run}) => {\n              const params = new URLSearchParams(location.search)\n              params.set('user', user)\n              params.set('repo', repo)\n              params.set('flow', flow)\n              if (run) params.set('run', run)\n              const url = location.pathname + '?' + params.toString()\n              window.history.replaceState({}, '',  url)\n            }\n            const element = document.getElementById('workflow')\n            const props = { token: atob(value), user, repo, flow, run, callback }\n            frictionlessComponents.render(frictionlessComponents.Workflow, props, element)\n          })\n        ")),r.a.createElement("div",{className:"cotainer margin-vert--lg"},r.a.createElement("div",{id:"workflow"})))}}}]);