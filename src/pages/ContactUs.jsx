import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBInput, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Delivery() {
  return (
    <>
      <div className="mx-auto gradient-custom mt-5" style={{ maxWidth: '800px',marginBottom:'1rem'}}>
        <MDBRow className="pt-3 mx-3">
          <MDBCol md="3">
            <div className="text-center" style={{ marginTop: '50px', marginLeft: '10px' }}>
              <MDBIcon fas icon="shipping-fast text-white" size="3x" />
              <MDBTypography tag="h3" className="text-white">Welcome</MDBTypography>
              <p className="white-text">It takes  30 seconds only to get a feedback!</p>
            </div>
            <div className="text-center">
                <Link to='/'>
                <MDBBtn color="white" rounded className="back-button">Go back</MDBBtn>

                </Link>
            </div>
          </MDBCol>
          <MDBCol md="9" className="justify-content-center">
            <MDBCard className="card-custom pb-4">
              <MDBCardBody className="mt-0 mx-5">
                <div className="text-center mb-3 pb-2 mt-3">
                  <MDBTypography tag="h4" style={{ color: '#495057' }} >Contact us</MDBTypography>
                </div>

                <form className="mb-0">
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label='Your name' type='text' />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput label='Your  email' type='text' />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label='City' type='text' />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput label='Zip' type='text' />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput style={{height:'7rem'}} label='message' type='text' />
                    </MDBCol>
                  
                  </MDBRow>

                  <div className="float-end">
                    <MDBBtn rounded style={{backgroundColor: '#0062CC'}}> Contact us</MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
}