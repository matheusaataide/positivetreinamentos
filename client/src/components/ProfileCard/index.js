import React from 'react';
import { Image, Card } from 'react-bootstrap';

import './styles.css';
import baseUrl from '../../util/baseUrl';

const ProfileCard = props => (
    <Card className="profile-card">
        <Card.Body>
            <Image roundedCircle fluid
                src={`${baseUrl}/uploads/${props.user.profilePic}`} 
                alt={props.user.name} />
            <Card.Title>{props.user.name}</Card.Title>
            <hr className="cell-divide-hr" />
            <ul className="list-unstyled li-space-lg">
                {
                    props.user.graduations.map((grad, index) => {
                        return (
                        <li key={ index }>
                            { grad.content }{ index !== (props.user.graduations.length-1) ? ';' : '.' }
                        </li>
                        );
                    })
                }
            </ul>
        </Card.Body>
    </Card>
);

export default ProfileCard;