import React from "react";
import { Button, Card, Checkbox, Container, Divider, Dropdown, Form, Header, Icon, Menu, Segment, Statistic, Tab } from 'semantic-ui-react';

const PresentationalNewJobs = (props) => {
  console.log('this is props', props);
  return (
    <div>
      <div className="selectSoftware">
        <Divider hidden />
        <Container textAlign={"center"}>
        <Dropdown text={props.currentSettings.softwareLabel || 'Available Software Options'} button={true}>
          <Dropdown.Menu>
            {
              props.allSoftware.software.options !== undefined ? props.allSoftware.software.options.map((element, index) => { return <Dropdown.Item key={index} value={element.id} onClick={() => props.setSoftwareID(element.id, element.info, element.label, element.applications)}>{element.label}</Dropdown.Item>})
              : 
              <div>null</div> 
            }
          </Dropdown.Menu>
        </Dropdown>
        </Container>
      </div>

      <div className="selectedSoftware">
      <Divider hidden />
      {
        props.currentSettings.softwareId !== "" ?
        <Container textAlign={"center"}>
        <Card color={"blue"} fluid>
          <Card.Content header='Description' />
          <Card.Content description={props.currentSettings.softwareInfo} />  
        </Card>
        </Container>
        : 
        null
      }
      </div>

      <div>
        <Divider hidden />
        <Container textAlign={"center"}>
        <Dropdown text={props.currentSettings.applicationLabel || 'Available Application Options'} button={true}>
          <Dropdown.Menu>
            {
              props.currentSettings.applications.length ? props.currentSettings.applications.map((element, index) => { return <Dropdown.Item key={index} value={element.id} onClick={() => props.setApplicationID(element.id, element.label)}>{element.label}</Dropdown.Item>})
              : 
              null 
            }
          </Dropdown.Menu>
        </Dropdown>
        </Container>
        <Divider hidden />
      </div>

      <div className="selectHardware">
      <Container textAlign={"center"}>
        <Divider hidden />
        <Dropdown text={props.currentSettings.hardwareLabel || 'Hardware Options Available'} button={true}>
          <Dropdown.Menu>
            {
              props.allHardware.hardware.options !== undefined ? props.allHardware.hardware.options.map((element, index) => { return <Dropdown.Item key={index} value={element.id} onClick={() => props.setHardware(element.id, element.max, element.label)}>{element.label}</Dropdown.Item>})
              : 
              <div>null</div> 
            }
          </Dropdown.Menu>
        </Dropdown>
        <Divider hidden />
      </Container>
      </div>

      <div className="selectedHardware">
      {
        props.currentSettings.hardwareId !== "" ? 
        <Container textAlign={"center"}>
          <Statistic color={"blue"} size={"mini"}>
            <Statistic.Label> Hardware Label</Statistic.Label>
            <Statistic.Value>{props.currentSettings.hardwareLabel}</Statistic.Value>
          </Statistic>
          <Statistic color={"blue"} size={"mini"}>
            <Statistic.Label>Number of Cores</Statistic.Label>
            <Statistic.Value>{props.currentSettings.cores}</Statistic.Value>
          </Statistic>
        </Container>
        : 
        null
      }
      </div>

      <div className="selectName">
      <Divider hidden />
      {
        props.currentSettings.hardwareId !== "" && props.currentSettings.softwareId !== "" ?
        <Container>
        <Form>
          <Form.Field>
            <label>New Job Name</label>
            <input placeholder='Please Enter A Name For Your New Job' id="newNameInput"/>
          </Form.Field>
          <Button type='submit' onClick={() => props.setNewName(document.getElementById("newNameInput").value)}>Submit</Button>
        </Form>
        </Container>
        : 
        null
      }
      <Divider hidden />
      </div>

      <div className="createNewJob">
      {
        props.currentSettings.hardwareId !== "" && props.currentSettings.softwareId !== "" && props.currentSettings.name !== "" ? 
        <Container textAlign={"center"}>
        <Button size={"large"} animated color={"green"} onClick={() => props.postNewJob(props.currentSettings.name, props.currentSettings.softwareId, props.currentSettings.applicationId, props.currentSettings.hardwareId, props.currentSettings.cores)}>
          <Button.Content visible>Create New Job</Button.Content>
          <Button.Content hidden><Icon name='right arrow' /></Button.Content>
        </Button>
        </Container>
        : 
        <div>
          <Container textAlign={"center"}><Header as='h3' icon>
            <Icon name='hand pointer' color={"blue"}/>
            Please Select An Option From Each Tab To Proceed
          </Header></Container>
        </div>
      }
      </div>

    </div>
  );
}

export default PresentationalNewJobs;