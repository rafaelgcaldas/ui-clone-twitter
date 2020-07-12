import React from 'react';

import Feed from '../Feed';

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
        <Banner>
          <Avatar />
        </Banner>

        <ProfileData>
          <EditButton outlined>Editar Perfil</EditButton>

          <h1>Rafael Gomes</h1>
          <h2>@rafaelzinho</h2>

          <p>
            Developer at <a href="https://izagro.com.br">@IZagro</a>
          </p>

          <ul>
            <li>
              <LocationIcon />
              São Paulo. Brasil
            </li>
            <li>
              <CakeIcon />
              Nascido em 10 de maio de 1988
            </li>
          </ul>

          <Followage>
            <span>
              seguindo <strong>94</strong>
            </span>
            <span>
              <strong>94 </strong> seguidores
            </span>
          </Followage>
        </ProfileData>

        <Feed />
      </Container>
  );
}

export default ProfilePage;