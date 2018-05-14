import React from "react";
import { Container, Divider, Header, Icon, Menu, Segment } from 'semantic-ui-react';

const PresentationalHeader = (props) => {
  return (
    <div>
      <Divider hidden/>
      <Menu pointing secondary>
        <Header as='h2' color={"grey"}><Icon name='cloud' color="blue"/><Header.Content>rescale</Header.Content></Header>
        <Menu.Menu position="right">
          <Menu.Item color={"black"} name='Current Jobs' icon={"history"} active={props.currentPage.view_existing_jobs} onClick={props.changeToJobs}/>
          <Menu.Item color={"green"} name='Create New Job' icon={"idea"} active={props.currentPage.create_new_jobs} onClick={props.changeToCreateNewJobs}/>
        </Menu.Menu>
      </Menu>
    </div>
  );
}

export default PresentationalHeader;