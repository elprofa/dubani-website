import React from 'react';
import SectionTeamStc from './SectionTeam.stc';
import Titre from '../../shared/Titre';
import SousTitre from '../../shared/SousTitre';
import {Col,Row,Container} from 'reactstrap';
import Teams from '../../shared/TeamCard';

const SectionTeam=()=>{
    const teams=[
        {picture:"/img/david.jpg",name:"David MBADINGA",caption:"Project manager"},
        {picture:"/img/wedo.jpg",name:"Wedo NTSIGNA",caption:"Developpeur fullstack"},
        {picture:"/img/kurt.jpg",name:"Kurt MOUCKETOU",caption:"Developpeur frontend"},
    ]

    return (
        <SectionTeamStc>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SousTitre 
                            texte="NOS TIGRES" 
                            marge_haut="30px" 
                            marge_bas="20px" 
                            poid_font="400"/>
                        <Titre 
                        texte="EQUIPE " 
                        poid_font="700"/>
                    </Col>
                </Row>
                <Row className="divTeam">
                    {
                        teams.map((team,index)=><Col key={index} md={4}><Teams picture={team.picture} name={team.name} caption={team.caption} /></Col>)
                    }
                </Row>
            </Container>
        </SectionTeamStc>
    )
}
export default SectionTeam;