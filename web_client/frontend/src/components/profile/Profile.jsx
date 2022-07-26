import React from "react";
import { Segment, Grid, Header, Divider, Image, Icon } from "semantic-ui-react";
import "./Profile.css"
class Profile extends React.Component {
  render() {
    return (
      <Grid container textAlign="center" style={{ marginTop: "50px" }}>
        
        <Segment
          style={{ minWidth: "1000px", minHeight: "500px", width: "1000px" }}
          textAlign="left"
        >
          <Image
            className="profile-image"
            src="https://image.freepik.com/free-vector/abstract-logo-with-colorful-leaves_1025-695.jpg"
            circular
            size="small"
          />
          <Header as="h1" textAlign="center" floated="left" color="red" font-weight="bold">
            SMART HOME GROUP13
          </Header>
          <Grid container columns={2}>
            <Grid.Column>
              <Grid container>
	
			    <Grid.Row columns={2}>
                  <Grid.Column style={{ textAlign: "right" }}>
                    <Header as="h4" color="orange">
                      {" "}
                      MEMBER 1
                    </Header>
                  </Grid.Column>
                  <Grid.Column />
                  <Grid.Column style={{ textAlign: "right" }}>
                    <Header as="h5" style={{ fontStyle: "italic" }}>
                      {" "}
                      Name:
                    </Header>
                  </Grid.Column>
                  <Grid.Column style={{ paddingBottom: " 1px" }}>
                    <b>Vũ Quốc Hiển</b>
                  </Grid.Column>

                  <Grid.Column style={{ textAlign: "right" }}>
                    <Header as="h5" style={{ fontStyle: "italic" }}>
                      {" "}
                      MSSV:
                    </Header>
                  </Grid.Column>
                  <Grid.Column style={{ paddingBottom: " 1px" }}>
                    <b>20183735</b>
                  </Grid.Column>
                  <Grid.Column style={{ textAlign: "right" }}>
                    <Header as="h5" style={{ fontStyle: "italic" }}>
                      {" "}
                      Lớp:
                    </Header>
                  </Grid.Column>
                  <Grid.Column style={{ paddingBottom: " 1px" }}>
                    <b>Kỹ thuật máy tính 02-K63</b>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column>
              <Grid container>
	
			    <Grid.Row columns={2}>
                  <Grid.Column style={{ textAlign: "right" }}>
                    <Header as="h4" color="orange">
                      {" "}
                      MEMBER 2
                    </Header>
                  </Grid.Column>
                  <Grid.Column />
                  <Grid.Column style={{ textAlign: "right" }}>
                    <Header as="h5" style={{ fontStyle: "italic" }}>
                      {" "}
                      Name:
                    </Header>
                  </Grid.Column>
                  <Grid.Column style={{ paddingBottom: " 1px" }}>
                    <b>Lê Huy Hoàng</b>
                  </Grid.Column>

                  <Grid.Column style={{ textAlign: "right" }}>
                    <Header as="h5" style={{ fontStyle: "italic" }}>
                      {" "}
                      MSSV:
                    </Header>
                  </Grid.Column>
                  <Grid.Column style={{ paddingBottom: " 1px" }}>
                    <b>20183923</b>
                  </Grid.Column>
                  <Grid.Column style={{ textAlign: "right" }}>
                    <Header as="h5" style={{ fontStyle: "italic" }}>
                      {" "}
                      Lớp:
                    </Header>
                  </Grid.Column>
                  <Grid.Column style={{ paddingBottom: " 1px" }}>
                    <b>Công nghệ thông tin 02-K63</b>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column>
              <Grid container>
	    
                <Grid.Row columns={2}>
                  <Grid.Column style={{ textAlign: "right" }}>
                    <Header as="h4" color="orange">
                      {" "}
                      MEMBER 3
                    </Header>
                  </Grid.Column>
                  <Grid.Column />
                  <Grid.Column style={{ textAlign: "right" }}>
                    <Header as="h5" style={{ fontStyle: "italic" }}>
                      {" "}
                      Name:
                    </Header>
                  </Grid.Column>
                  <Grid.Column>
                    <b>POUTH LYHEANG</b>
                  </Grid.Column>
                  <Grid.Column style={{ textAlign: "right" }}>
                    <Header as="h5" style={{ fontStyle: "italic" }}>
                      {" "}
                      MSSV:
                    </Header>
                  </Grid.Column>
                  <Grid.Column style={{ paddingBottom: " 1px" }}>
                    <b>20180279</b>
                  </Grid.Column>
                  <Grid.Column style={{ textAlign: "right" }}>
                    <Header as="h5" style={{ fontStyle: "italic" }}>
                      {" "}
                      Lớp:
                    </Header>
                  </Grid.Column>
                  <Grid.Column style={{ paddingBottom: " 1px" }}>
                    <b>Công nghệ thông tin 03-K63</b>
                  </Grid.Column>
                  <Grid.Column style={{ textAlign: "right" }}>
                    <Header as="h5" style={{ fontStyle: "italic" }}>
                      {" "}
                
                    </Header>
                  </Grid.Column>
                  <Grid.Column style={{ paddingBottom: " 1px" }}>
                   
                  </Grid.Column>
                </Grid.Row>
				 </Grid>
            </Grid.Column>
            <Grid.Column>
              <Grid container>
	
                <Grid.Row columns={2}>
                  <Grid.Column style={{ textAlign: "right" }}>
                    <Header as="h4" color="orange">
                      {" "}
                      MEMBER 4
                    </Header>
                  </Grid.Column>
                  <Grid.Column />
                  <Grid.Column style={{ textAlign: "right" }}>
                    <Header as="h5" style={{ fontStyle: "italic" }}>
                      {" "}
                      Name:
                    </Header>
                  </Grid.Column>
                  <Grid.Column style={{ paddingBottom: " 1px" }}>
                    <b>Trịnh Hồng Dương</b>
                  </Grid.Column>

                  <Grid.Column style={{ textAlign: "right" }}>
                    <Header as="h5" style={{ fontStyle: "italic" }}>
                      {" "}
                      MSSV:
                    </Header>
                  </Grid.Column>
                  <Grid.Column style={{ paddingBottom: " 1px" }}>
                    <b>20183727</b>
                  </Grid.Column>
                  <Grid.Column style={{ textAlign: "right" }}>
                    <Header as="h5" style={{ fontStyle: "italic" }}>
                      {" "}
                      Lớp:
                    </Header>
                  </Grid.Column>
                  <Grid.Column style={{ paddingBottom: " 1px" }}>
                    <b>Kỹ thuật máy tính 03-K63</b>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column>
              <Grid container>
                <Grid.Row columns={1}>
                  <Grid.Column>
                    <Header as="h4" color="orange">
                      ABOUT YOUR HOUSE
                    </Header>
                  </Grid.Column>
                  <Grid.Column style={{ textAlign: "justified" }}>
                    <b>
                      Amazon.com, Inc., doing business as Amazon, is an American
                      electronic commerce and cloud computing company based in
                      Seattle, Washington that was founded by Jeff Bezos on July
                      5, 1994.
                    </b>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                  <Grid.Column>
                    <Header as="h4" color="orange">
                      ADDRESS
                    </Header>
                  </Grid.Column>
                  <Grid.Column style={{ textAlign: "justified" }}>
                    <b>
                      Amazon.com, Inc., doing business as Amazon, is an American
                      electronic commerce and cloud computing company based in
                      Seattle, Washington that was founded by Jeff Bezos on July
                      5, 1994.
                    </b>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid>
          <Divider className="api-divider" />
          <Grid container>
            <Grid.Row columns={4}>
              <Grid.Column style={{ textAlign: "right" }}>
                <Header as="h4" color="orange">
                  {" "}
                  CLIENT ID
                </Header>
              </Grid.Column>
              <Grid.Column>***********************</Grid.Column>
              <Grid.Column>
                <Header
                  as="h4"
                  color="orange"
                  width={1}
                  style={{ textAlign: "right" }}
                >
                  {" "}
                  CLIENT SECRET
                </Header>
              </Grid.Column>
              <Grid.Column style={{ textAlign: "left" }}>
                ***********************
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Grid>
    );
  }
}
export default Profile;

