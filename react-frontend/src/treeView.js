import React from "react";
import PropTypes from "prop-types";
import SvgIcon from "@material-ui/core/SvgIcon";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import Collapse from "@material-ui/core/Collapse";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support

function MinusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function CloseSquare(props) {
  return (
    <SvgIcon
      className="close"
      fontSize="inherit"
      style={{ width: 14, height: 14 }}
      {...props}
    >
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
    </SvgIcon>
  );
}

function TransitionComponent(props) {
  const style = useSpring({
    from: { opacity: 0, transform: "translate3d(20px,0,0)" },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

TransitionComponent.propTypes = {
  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,
};

const StyledTreeItem = withStyles((theme) => ({
  iconContainer: {
    "& .close": {
      opacity: 0.3,
    },
  },
  group: {
    marginLeft: 7,
    paddingLeft: 18,
    borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`,
  },
}))((props) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} />
));

const useStyles = makeStyles({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function CustomizedTreeView({ databases }) {
  const classes = useStyles();
  const [Tables, setTables] = React.useState([]);
  const [Procedures, setProcedures] = React.useState([]);
  const [Triggers, setTriggers] = React.useState([]);
  const [Views, setViews] = React.useState([]);
  const [Indexes, setIndexes] = React.useState([]);

  React.useEffect(() => {
    databases.map((database) => {
      fetch(`http://localhost:4000/tables?schema="${database.database_name}"`)
        .then((response) => response.json())
        .then((response) =>
          setTables((oldArray) => [...oldArray, response.data])
        )
        .catch((err) => console.error(err));
    });
    databases.map((database) => {
      fetch(`http://localhost:4000/procedures?schema=${database.database_name}`)
        .then((response) => response.json())
        .then((response) =>
          setProcedures((oldArray) => [...oldArray, response.data])
        )
        .catch((err) => console.error(err));
    });
    fetch(`http://localhost:4000/triggers`)
      .then((response) => response.json())
      .then((response) =>
        setTriggers((oldArray) => [...oldArray, response.data])
      )
      .catch((err) => console.error(err));
    fetch(`http://localhost:4000/views`)
      .then((response) => response.json())
      .then((response) => setViews((oldArray) => [...oldArray, response.data]))
      .catch((err) => console.error(err));
    fetch(`http://localhost:4000/indexes`)
      .then((response) => response.json())
      .then((response) =>
        setIndexes((oldArray) => [...oldArray, response.data])
      )
      .catch((err) => console.error(err));
  }, [databases]);

  const renderTables = (table, index) => {
    return (
      <StyledTreeItem
        nodeId={table + index}
        label={table}
        key={table + index + 1}
      >
        <StyledTreeItem
          nodeId={`COLUMNS-${index + 1}`}
          label="COLUMNS"
        ></StyledTreeItem>
      </StyledTreeItem>
    );
  };

  const renderProcedures = (procedure, index) => {
    let node = Math.floor(Math.random() * Math.floor(100));
    return (
      <StyledTreeItem
        nodeId={`procedure-${index + node}`}
        label={procedure}
        key={procedure}
      >
        <StyledTreeItem nodeId={"node"} label="Procedures"></StyledTreeItem>
      </StyledTreeItem>
    );
  };

  const renderTriggers = (trigger, index) => {
    let node = Math.floor(Math.random() * Math.floor(100));
    return (
      <StyledTreeItem
        nodeId={`trigger-${index + node}`}
        label={trigger}
        key={trigger}
      >
        <StyledTreeItem nodeId={"node"} label="triggers"></StyledTreeItem>
      </StyledTreeItem>
    );
  };

  const renderViews = (view, index) => {
    let node = Math.floor(Math.random() * Math.floor(100));
    return (
      <StyledTreeItem nodeId={`view-${index + node}`} label={view} key={view}>
        <StyledTreeItem nodeId={"node"} label="VIEW"></StyledTreeItem>
      </StyledTreeItem>
    );
  };

  const renderIndexes = (tableIndex, index) => {
    let node = Math.floor(Math.random() * Math.floor(100));
    return (
      <StyledTreeItem
        nodeId={`index-${index + node}`}
        label={tableIndex}
        key={tableIndex}
      ></StyledTreeItem>
    );
  };

  const renderTreeItems = (database, index) => {
    const foundTables = Tables.find((element) =>
      element.find((element) => element.TABLE_SCHEMA === database)
    );
    const foundProcedures = Procedures.find((element) =>
      element.find((element) => element.ROUTINE_SCHEMA === database)
    );
    const foundTrigger = Triggers.find((element) =>
      element.find((element) => element.trigger_schema === database)
    );
    const foundView = Views.find((element) =>
      element.find((element) => element.TABLE_SCHEMA === database)
    );
    const foundIndex = Indexes.find((element) =>
      element.find((element) => element.TABLE_SCHEMA === database)
    );
    return (
      <StyledTreeItem nodeId={database} label={database} key={index + 1}>
        <StyledTreeItem
          nodeId={`${database}-tables`}
          label="Tables"
          onClick={() => console.log(foundTables)}
        >
          {foundTables
            ? foundTables.map((database, index) => {
                return renderTables(database.TABLE_NAME, index);
              })
            : null}
        </StyledTreeItem>
        <StyledTreeItem
          nodeId={`${database}-procedures`}
          label="Procedures"
          onClick={() => console.log(foundTables)}
        >
          {foundProcedures
            ? foundProcedures.map((database, index) => {
                return renderProcedures(database.ROUTINE_NAME, index);
              })
            : null}
        </StyledTreeItem>
        <StyledTreeItem
          nodeId={`${database}-triggers`}
          label="Triggers"
          onClick={() => console.log(foundTables)}
        >
          {foundTrigger
            ? foundTrigger.map((trigger, index) => {
                if (database === trigger.trigger_schema) {
                  return renderTriggers(trigger.trigger_name, index);
                }
              })
            : null}
        </StyledTreeItem>
        <StyledTreeItem
          nodeId={`${database}-views`}
          label="Views"
          onClick={() => console.log(foundTables)}
        >
          {foundView
            ? foundView.map((view, index) => {
                if (database === view.TABLE_SCHEMA) {
                  return renderViews(view.TABLE_NAME, index);
                }
              })
            : null}
        </StyledTreeItem>
        <StyledTreeItem
          nodeId={`${database}-indexes`}
          label="Indexes"
          onClick={() => console.log(foundTables)}
        >
          {foundIndex
            ? foundIndex.map((tableIndex, index) => {
                if (database === tableIndex.TABLE_SCHEMA) {
                  return renderIndexes(tableIndex.TABLE_NAME, index);
                }
              })
            : null}
        </StyledTreeItem>
      </StyledTreeItem>
    );
  };
  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<MinusSquare />}
      defaultExpandIcon={<PlusSquare />}
      defaultEndIcon={<CloseSquare />}
    >
      <StyledTreeItem nodeId="0" label="Databases">
        {databases.map((database, index) => {
          return renderTreeItems(database.database_name, index);
        })}
      </StyledTreeItem>
    </TreeView>
  );
}
