<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script>
export default {
  name: 'App'
}
</script>
<style lang='scss'>
/* 复选框 单选框 */
.el-radio {
  color: #222;
  font-weight: normal;
}
.el-checkbox {
  font-weight: normal;
  color: #222;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-radio__input.is-checked .el-radio__inner {
  background-color: #2BC17C !important;
  border-color: #2BC17C;
}
.el-checkbox__input.is-checked+.el-checkbox__label,
.el-radio__input.is-checked+.el-radio__label {
  color: #222;
}
.el-radio__inner {
  width: 20px;
  height: 20px;
}
.el-checkbox__input {
  vertical-align: bottom;
}
.el-checkbox__label {
  font-size: 16px;
}
.el-checkbox__inner {
  width: 19px;
  height: 19px;
}
.el-checkbox__inner::after {
  border-width: 2px;
  width: 4px;
  height: 9px;
  left: 5px;
}
.el-radio__label {
  font-size: 16px;
}
.el-radio__inner::after {
  width: 8px;
  height: 8px;
}
.el-checkbox__inner:hover,
.el-radio__inner:hover,
.el-checkbox__input.is-focus .el-checkbox__inner {
  border-color: #2BC17C;
}
.check-s .el-checkbox__label {
  line-height: 30px;
}
.check-s .el-checkbox__inner {
  margin-top: 6px;
}
.check-s .el-checkbox__label {
  margin-left: 15px;
}
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background: none;
  border-color: #dcdfe6;
}
/* table */
.el-table--border {
  margin-top: 60px;
  font-size: 14px;
}
.el-table .cell {
  color: #333;
}
.el-table th>.cell {
  color: #6F6F6F;
}
.el-table_1_column_6 .cell:hover,.el-table_1_column_4:hover {
  opacity: .75;
}
.el-table--scrollable-y .el-table__body-wrapper {
  overflow: hidden;
}
.el-table--medium th {
  padding: 15px 0;
}
.notice-table td {
 padding: 7px 0;
}
.notice-table .el-table_1_column_4:hover {
  opacity: 1;
}
.el-input--medium .el-input__inner:focus {
  border-color: #2BC17C;
}
.el-pager li.active,
.el-pager li:hover,
.el-pagination button:hover,
.el-pagination button:hover,
.el-pagination button:hover,
.el-pagination button:hover,
.el-select-dropdown__item.selected {
  color: #2BC17C;
}
.el-pagination__sizes .el-input .el-input__inner:hover,
.el-select .el-input__inner:focus {
  border-color: #2BC17C;
}
.el-pagination__editor.el-input .el-input__inner {
  font-size: 14px;
  line-height: normal;
}
/* 面包屑 */
.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link {
  font-weight: normal;
}
.el-breadcrumb__inner a:hover, .el-breadcrumb__inner.is-link:hover {
  color: #2BC17C;
}
.el-breadcrumb__item {
  color: #999;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner {
  color: #999;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
  color: #999;
}
.el-breadcrumb__inner {
  color: #222;
}
/* 选择器 */
.el-select .el-input.is-focus .el-input__inner {
  border-color: #2BC17C;
}
.el-input--medium {
  font-size: 16px;
}
/*时间选择器*/
.el-range-editor.el-input__inner {
  height: 48px;
  width: 490px;
  padding: 3px 18px;
}
.el-range-editor--medium .el-range-separator {
  line-height: 42px;
  font-size: 16px;
}
.el-range-editor--medium .el-range-input {
  font-size: 16px;
}
.el-date-editor .el-range__icon {
  font-size: 22px;
}
.el-input__inner {
  color: #333;
}
/* 弹窗 */
.el-dialog__header {
  padding: 40px 30px 0;
}
.el-dialog__footer {
  padding: 0 0 40px;
  margin-top: 26px;
  .el-button {
    width: 137px;
    margin: 0 15px;
  }
}
.el-dialog__body {
  padding: 0 30px 40px;
  font-size: 14px;
}
.el-dialog__headerbtn {
  top: 15px;
  right: 20px;
  font-size: 18px;
}
.el-button--primary,
.el-button--primary:focus, .el-button--primary:hover {
  background: #2BC17C;
  border-color: #2BC17C;
}
.el-button--medium {
  font-size: 14px;
}
.el-button--primary:hover {
  opacity: .75;
}
.el-dialog__headerbtn:hover .el-dialog__close {
  color: #2BC17C;
}
.el-dialog {
  border-radius: 6px;
}
.popu-sucess .el-dialog .el-dialog__header { display: none;}
.el-dialog {
  width: 566px !important;
}
.el-dialog__headerbtn .el-dialog__close {
  font-weight: bold;
}
.el-dialog__title {
  font-weight: bold;
}
.popu .el-dialog__body {
  max-height: 400px;
  overflow-y: scroll;
}
// 按钮
.el-button {
  font-weight: normal;
}
// 登陆轮播图
.banner-img .el-carousel__indicator {
  padding: 0;
}
.banner-img .el-carousel__button {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #B2B2B2;
  margin: 0 14px;
}
.banner-img .is-active .el-carousel__button {
  background: #2BC17C;
}
.banner-img .el-carousel__arrow {
  display: none;
}
/*table 表头错位*/
body .el-table th.gutter{
  display: table-cell!important;
}
body .el-table colgroup.gutter {
  display: table-cell !important;
}
.el-table--border th.gutter:last-of-type {
  display: block!important;
}
// tab
.el-tabs__header {
  margin: 0;
}
.el-tabs__nav-wrap::after {
  height: 1px;
  background-color: #F5F5F5;
}
.el-tabs__active-bar {
  background-color: #2BC17C;
}
//学校组织结构树形图
.org-tree-node-label .org-tree-node-label-inner {
  box-shadow: none !important;
  border: 1px solid #DCDFE6;
  // height: 30px;
  line-height: 30px;
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    border: 1px solid #2BC17C;
    color: #2BC17C;
  }
}
.test-class {
  .org-tree-node-label-inner {
    border: 1px solid #2BC17C;
    color: #2BC17C;
  }
}
.disable-class {
  .org-tree-node-label-inner {
    border-color: #eee;
    color: #999;
    cursor: default;
  }
}
.horizontal .org-tree-node:only-child:before {
  top: 0 !important;
}
.horizontal .org-tree-node-label {
  white-space: nowrap;
}
.anchorBL {
  display: none;
}
// 左侧导航
.el-submenu__title {
  // padding: 0 0 0 60px !important;
  font-size: 20px;
}
.el-submenu__icon-arrow {
  right: 40px;
}
.tac .el-submenu__title {
  height: 56px;
  line-height: 56px;
  font-size: 0;
  padding-left: 48px !important;
}
.tac .el-submenu__title span {
  font-size: 18px;
  color: #333;
}
.tac .el-icon-arrow-down:before {
  display: block;
}
.tac .el-icon-arrow-down:before {
  margin-bottom: 2px;
}
.el-submenu__icon-arrow {
  font-weight: bold;
}
.el-submenu {
  .el-submenu__title {
    &:hover {
      background-color: #e3faf5 !important;
    }
  }
}
.el-submenu.is-opened .el-submenu__title, .el-submenu.is-opened li {
  background-color: #f5f5f5 !important;
}
.el-menu-item-group__title {
  padding: 0;
}
.el-menu-item-group {
  .el-menu-item {
    color: #666 !important;
  }
}
// 进度条
.el-progress__text {
  color: transparent;
}
// 上传图片
.avatar-uploader .el-upload {
  border: 1px dashed #DCDFE6;
  padding: 9px;
}
.avatar-uploader .el-upload:hover {
  border: 1px dashed #2BC17C;
}
// 文本框
.wrap-con .editor-wrapper .el-textarea__inner {
  height: 200px;
}
.el-textarea__inner:focus {
  border-color: #2BC17C;
}
.screen-wrap .content .el-textarea__inner {
  height: 118px;
}
// 编辑器
.con-wrapper .ql-toolbar.ql-snow {
  border: 1px solid #dcdfe6;
}
.con-wrapper .ql-container.ql-snow {
  border: 1px solid #dcdfe6;
}
.con-wrapper .ql-toolbar.ql-snow + .ql-container.ql-snow {
  height: 280px;
}
// 上传
.el-upload-dragger {
  width: 512px;
  height: 226px;
  background: #F5F5F5;
}

.el-table .error-row {
  .cell {
    color: red;
  }
}

.el-table .success-row {
  .cell {
    color: #333;
  }
}
// 对话框弹窗
.el-message-box, .el-dialog__wrapper {
  .el-button--default {
    border-color: #999;
    &:hover {
      background: none;
      color: #606266;
      opacity: .75;
    }
  }
  .el-button--primary {
    border-color: #2BC17C;
    background: #2BC17C;
    opacity: 1;
    &:hover {
      background: #2BC17C;
      color: #fff;
      opacity: .75;
    }
  }
}
.overflow {
  overflow: hidden;
}
//阅读报告页table阅读数据异常红色警告样式
.el-table .warning-row .cell {
  color: #FF7652;
}

.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
</style>
