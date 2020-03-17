(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{227:function(t,s,n){"use strict";n.r(s);var a=n(17),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"git"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" GIT")]),t._v(" "),n("h2",{attrs:{id:"git-常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-常用命令"}},[t._v("#")]),t._v(" git 常用命令")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化git")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 克隆项目")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#添加所有文件到暂存区")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("文件名"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#添加指定文件到暂存区")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("提交信息"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交暂存区到仓库区")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 取回远程仓库的变化，并与本地分支合并")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送到远程仓库")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("远程主机名"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("本地分支名"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch --all "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载远程仓库的所有变动")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("分支名"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并指定分支到当前分支")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有本地分支")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("分支名"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换到指定分支")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置提交代码时的用户信息")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--global"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" user.name "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[name]"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--global"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" user.email "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[email address]"')]),t._v("\n")])])]),n("h2",{attrs:{id:"本地项目上传至多个远程库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#本地项目上传至多个远程库"}},[t._v("#")]),t._v(" 本地项目上传至多个远程库")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关联远程库")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" gitee "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" github "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push gitee master\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push github master\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);