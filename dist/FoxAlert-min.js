function FA_ShowMessage(e){return void 0!==e.success&&e.success?FA_showSuccessMessage(e):void 0!==e.error&&e.error?FA_showErrorMessage(e):(void 0!==e.responseJSON&&(e=e.responseJSON),void 0!==e.message)?FA_showErrorMessage(e):void 0}function FA_showSuccessMessage(prOBJ){void 0!==prOBJ.reloadDataTableByID&&$("#"+prOBJ.reloadDataTableByID).DataTable().ajax.reload(),void 0!==prOBJ.callBackFunction&&eval(prOBJ.callBackFunction),void 0!==prOBJ.callBackFunction2&&eval(prOBJ.callBackFunction2),void 0!==prOBJ.title?void 0!==prOBJ.reload?prOBJ.reload&&Swal.fire(prOBJ.title,prOBJ.message,"success").then(function(){document.location.reload(!0)}):Swal.fire(prOBJ.title,prOBJ.message,"success"):void 0!==prOBJ.reload?Swal.fire("Sucesso",prOBJ.message,"success").then(function(){document.location.reload(!0)}):Swal.fire("Sucesso",prOBJ.message,"success")}function FA_showErrorMessage(prOBJ){void 0!==prOBJ.reloadDataTableByID&&$("#"+prOBJ.reloadDataTableByID).DataTable().ajax.reload(),void 0!==prOBJ.callBackFunction&&eval(prOBJ.callBackFunction),void 0!==prOBJ.callBackFunction2&&eval(prOBJ.callBackFunction2),void 0!==prOBJ.title?void 0!==prOBJ.reload?Swal.fire(prOBJ.title,prOBJ.message,"error").then(function(){document.location.reload(!0)}):Swal.fire(prOBJ.title,prOBJ.message,"error"):void 0!==prOBJ.reload?Swal.fire(prOBJ.title,prOBJ.message,"error").then(function(){document.location.reload(!0)}):Swal.fire("Oops",prOBJ.message,"error")}