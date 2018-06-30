import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import tableStyle from "assets/jss/material-dashboard-react/components/tableStyle";
import NumberFormat from 'react-number-format';

import Moment from 'react-moment';

function CustomTable({ ...props }) {
  const { classes, tableHead, tableData, tableHeaderColor } = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((prop, key) => {
            return (
              <TableRow key={key}>
                    <TableCell className={classes.tableCell} key={prop.id}>
                      {prop.id}
                    </TableCell>
                    <TableCell className={classes.tableCell} key={prop.id}>
                      {prop.name}
                    </TableCell>
                    <TableCell className={classes.tableCell} key={prop.id}>
                      <NumberFormat value={prop.price} displayType={'text'} thousandSeparator={true} fixedDecimalScale={true} decimalScale={2} prefix={'$'} />
                    </TableCell>
                    <TableCell className={classes.tableCell} key={prop.id}>
                      <Moment format="DD/MM/YYYY">{prop.created_at}</Moment>
                    </TableCell>
                    <TableCell className={classes.tableCell} key={prop.id}>
                      {'Status'}
                    </TableCell>

              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  classes: PropTypes.object.isRequired,
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export default withStyles(tableStyle)(CustomTable);
