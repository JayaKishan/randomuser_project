import 'antd/dist/antd.css';
import './index.css';
import { Image, Button, Descriptions, Row, Col, Tooltip } from 'antd';
import { SyncOutlined } from '@ant-design/icons';


import MapPicker from 'react-google-map-picker'

import React, { useEffect, useState } from 'react';

const DefaultLocation = { lat: 47.9272302, lng: 106.9046525 };


const GetUserData = () => {
    const [data, setData] = useState([]);
    const [loadingData, setLoadingData] = useState(false);
    
    useEffect(() => {
        fetchdata();
    }, []);

    
    const fetchdata = async () => {
        const response = await fetch("https://randomuser.me/api");
        const data = await response.json();
        console.log(data.results[0]);
        setData(data.results[0]);
        setLoadingData(true);
        title(data);
        handleChangeLocation(data)
    };


    function title(title) {
        document.title = title.results[0].name.first;
    }


    const imageStyles = {
        marginLeft: '150px',
        marginBottom: '30px'
    };

    const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

    const [location, setLocation] = useState(defaultLocation);

    function handleChangeLocation(mapValues) {
        let lat = parseInt(mapValues.results[0].location.coordinates.latitude)
        let lng = parseInt(mapValues.results[0].location.coordinates.longitude)
        console.log('lat-', lat, 'lng-', lng)
        // setLocation({ lat: lat, lng: lng });
    }




    return (
        <div>
        {loadingData ? (
                <Row gutter={[20, 20]}>
                    <Col span={12}>
                        <div className="refreshBtn">
                            <Tooltip title="refresh">
                                <Button sixe="large" type="primary" onClick={() => fetchdata()} shape="circle" icon={<SyncOutlined />} />
                            </Tooltip>
                        </div>
                        <div style={imageStyles}><Image src={data.picture.large}  style={{ width: 300 }} /></div>
                        <div>
                        <Descriptions
                            title={data.name.first  + " Details"}
                            style={{textAlign: 'center'}}
                            bordered
                            column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
                            >
                            <Descriptions.Item label="User Name">{data.name.title}. {data.name.first} {data.name.last}</Descriptions.Item>
                            <Descriptions.Item label="Gender">{data.gender}</Descriptions.Item>
                            <Descriptions.Item label="DOB">{new Date(data.dob.date).toLocaleDateString()}
                            </Descriptions.Item>
                            <Descriptions.Item label="Contact">{data.cell}</Descriptions.Item>
                            <Descriptions.Item label="Email"><a href={"mailto:" + data.email}>{data.email}</a></Descriptions.Item>
                            <Descriptions.Item label="Age">{data.dob.age}</Descriptions.Item>
                            <Descriptions.Item label="Address">
                                {data.location.street.name}, {data.location.street.number}
                                <br />
                                {data.location.state}, {data.location.city}
                                <br />
                                {data.location.country} ({data.nat}), {data.location.postalcode}
                            </Descriptions.Item>
                            <Descriptions.Item label="Registration">
                                {new Date(data.registered.date).toLocaleDateString()}
                            </Descriptions.Item>
                            </Descriptions>
                        </div>
                    </Col>
                    <Col span={12}>
                        <>
                            <MapPicker
                                defaultLocation={defaultLocation}
                                onChangeLocation={handleChangeLocation}
                                apiKey="AIzaSyAkBhTU6Tc8FNdu64ZRG4rPm2bin7H7OOI"
                            />
                        </>
                    </Col>
                </Row>
        ) : (
          <p>No data</p>
        )}
      </div>
    );
};

export default GetUserData;