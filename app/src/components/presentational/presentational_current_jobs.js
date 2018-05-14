import React from "react";
import { Container, Divider, Dropdown, Header, Icon, Menu, Segment, Statistic, Tab } from 'semantic-ui-react';
import trial_photo from "../../assets/images/data2.jpg";

let panes = [
  { menuItem: 'Image 1', render: () => <Tab.Pane>Image 1</Tab.Pane> },
  { menuItem: 'Image 2', render: () => <Tab.Pane>Image 2</Tab.Pane> },
  { menuItem: 'Image 3', render: () => <Tab.Pane>Image 3</Tab.Pane> },
  { menuItem: 'Image 4', render: () => <Tab.Pane>Image 4</Tab.Pane> },
  { menuItem: 'Image 5', render: () => <Tab.Pane>Image 5</Tab.Pane> },
  { menuItem: 'Image 6', render: () => <Tab.Pane>Image 6</Tab.Pane> }
]

const PresentationalCurrentJobs = (props) => {
  
  if(props.currentJob.specificJob.hardware !== undefined) {
    panes = [
      { menuItem: `${props.currentJob.specificJob.results.images[0]}`, render: () => <Tab.Pane><img src={require(`../../assets${props.currentJob.specificJob.results.images[0]}`)}/></Tab.Pane> },
      { menuItem: `${props.currentJob.specificJob.results.images[1]}`, render: () => <Tab.Pane><img src={require(`../../assets${props.currentJob.specificJob.results.images[1]}`)}/></Tab.Pane> },
      { menuItem: `${props.currentJob.specificJob.results.images[2]}`, render: () => <Tab.Pane><img src={require(`../../assets${props.currentJob.specificJob.results.images[2]}`)}/></Tab.Pane> },
      { menuItem: `${props.currentJob.specificJob.results.images[3]}`, render: () => <Tab.Pane><img src={require(`../../assets${props.currentJob.specificJob.results.images[3]}`)}/></Tab.Pane> },
      { menuItem: `${props.currentJob.specificJob.results.images[4]}`, render: () => <Tab.Pane><img src={require(`../../assets${props.currentJob.specificJob.results.images[4]}`)}/></Tab.Pane> },
      { menuItem: `${props.currentJob.specificJob.results.images[5]}`, render: () => <Tab.Pane><img src={require(`../../assets${props.currentJob.specificJob.results.images[5]}`)}/></Tab.Pane> },
    ]
  }
  
  return (
    <div>
      <div className="allJobsDropDown">
      <Container textAlign={"center"}>
        <Divider hidden />
        <Dropdown text='Current Jobs By ID' button={true}>
          <Dropdown.Menu>
            {
              props.allJobs !== undefined ? props.allJobs.map((element, index) => { return <Dropdown.Item key={index} value={element.id} onClick={() => props.getJobByID(element.id)}>{element.id}</Dropdown.Item>})
              : 
              null
            }
          </Dropdown.Menu>
        </Dropdown>
        </Container>
        <Divider hidden />
      </div>

      <div className="currentJobStatistics">
      {
        props.currentJob.specificJob.hardware !== undefined ? 
        <Container fluid>
        <Statistic.Group size={"mini"} color={"blue"}>
          <Statistic>
            <Statistic.Label>Name</Statistic.Label>
            <Statistic.Value>{props.currentJob.specificJob.label}</Statistic.Value>
          </Statistic>
          <Statistic> 
            <Statistic.Label>Hardware</Statistic.Label>
            <Statistic.Value>{props.currentJob.specificJob.hardware.type.label}</Statistic.Value>
          </Statistic>
          <Statistic>
            <Statistic.Label>Software</Statistic.Label>
            <Statistic.Value>{props.currentJob.specificJob.software.application.label}</Statistic.Value>
          </Statistic>
          <Statistic>
            <Statistic.Label>Software Type</Statistic.Label>
            <Statistic.Value>{props.currentJob.specificJob.software.type.label}</Statistic.Value>
          </Statistic>
        </Statistic.Group> 
        </Container>
        : 
        <div>
          <Container textAlign={"center"}><Header as='h2' icon><Icon name='hand pointer' color={"blue"}/>Select Job
          <Header.Subheader>Please Select An Existing Job</Header.Subheader>
          </Header></Container>
        </div>
      }
      </div>

      <div className="currentJobImages">
      {
        props.currentJob.specificJob.hardware !== undefined ? 
        <Tab menu={{ color: "blue", fluid: true, vertical: true, tabular: 'right' }} panes={panes} />
        : 
        null
      }
      </div>

    </div>
  );
}

export default PresentationalCurrentJobs;
