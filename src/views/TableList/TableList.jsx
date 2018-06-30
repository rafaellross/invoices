import React, {Component} from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import axios from 'axios';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  addButton : {
    position: 'fixed',
    marginLeft: '50px'

  }
};



class TableList extends Component {
  constructor(props) {
      super(props);
      this.state = {value: '', items: ''};
      const { classes } = styles;
  }


  componentDidMount(){
    axios.get('http://192.168.10.121:8000/items')
    .then(response => {
      this.setState({ items: response.data });
    })
    .catch(function (error) {
      console.log(error);
    })

  }

render(){
  return (
    <Grid container>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={styles.cardTitleWhite}>Invoices</h4>
          </CardHeader>
          <CardBody>

          {this.state.items !== ''  ? (
            <Table
              tableHeaderColor="primary"
              tableHead={["#", "Customer", "Total", "Invoice Date", "Status"]}
              tableData={this.state.items}
            />
          ) : (
            <div>Loading</div>
          )}
          </CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Button variant="fab" color="primary" aria-label="add">
          <AddIcon />
        </Button>
      </GridItem>
    </Grid>
  );
}
}

export default withStyles(styles)(TableList);
