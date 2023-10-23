'use client'

import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net';
import {
  req_gl_Request_Content_Send
} from './NetworkTool'
import {
  req_gl_table_col_config,
  req_gl_Datatable_Ajax_Dyn
} from './DataTableTool'

type Props  = {
  div   : string
  typ01 ?: string
  typ02 ?: string
  stat  ?: string
}
const table = {
    head: [
        "ID", "Tài khoản", "Email", "SĐT"
    ]
}

const do_get_list_ByAjax_Dyn = ({div, typ01, typ02, stat}: {
  div   : string,
  typ01 ?: number,
  typ02 ?: number,
  stat  ?: number,
}) => {	
  let ref : {
    typ01 ?: number,
    typ02 ?: number,
    stat  ?: number,
  } 				= req_gl_Request_Content_Send("ServiceAutUser", "SVLstDyn");
  if(typ01) {
    ref.typ01 			= typ01; //typ02				
  }
  if(typ02){
    ref.typ02 			= typ02; //typ02				
  }
  if(stat)	{
    ref.stat 			= stat;
  }
  
  var fileTransl			= null;
  var additionalConfig 	= {};
  var colConfig			= req_gl_table_col_config($(div).find("table"), null, additionalConfig);
  var dataTableOption 	= {
      "canScrollY"			: true,
  };	     		
  
  //call Datatable AJAX dynamic function from DatatableTool
  var oTable = req_gl_Datatable_Ajax_Dyn (
    div, 
    "http://localhost:8080/priv",
    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG0iLCJleHAiOjE2OTgwNzQwMDIsImlhdCI6MTY5ODA3MDQwMn0.E70mAY7_1eisTAnftiPBmZ65u1Y-sxQefJpYmrkZ4iW4xgZ_5gbafPQxZX03JCZ2K6pQnL99jSzs9EO4M0o0lg", 
    fileTransl, 
    colConfig, 
    ref, 
    null, undefined, null, undefined, 
    // do_bind_list_event,
    null, 
    dataTableOption
  );
  
  var key			= (!typ01?"":typ01) + "_" + (!typ02?"":typ02) + "_" + (!stat?"":stat);
  // pr_datatables [key] = oTable;
}

function DataTable({ div, typ01, typ02, stat } : Props) {
  const tableRef = useRef(null);

  useEffect(() => {
    const table = tableRef.current;
  
    if (table) {
      // $(table).DataTable();
      do_get_list_ByAjax_Dyn({ div, typ01: 1 });
    }
  
    return () => {
      if (table) {
        $(table).DataTable().destroy(true);
      }
    };
  }, []);

  return (
    <div className={div}>
      <table ref={tableRef}>
        <thead>
          <tr>
            {table.head.map(item => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
		  	</tbody>
      </table>
    </div>
  );
};

export default DataTable;