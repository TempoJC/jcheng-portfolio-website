import PropTypes from 'prop-types';
import { Container } from '@/Atoms/Container';
import atresplayer from '../public/images/atresplayer_background.jpeg';
import Image from 'next/image';

const Projects = ({ refNode }) => {
  return (
    <Container ref={refNode} id={'projects'}>
      <div className="flex flex-row">
        <div className="flex">
          <div className="w-2/3">
            <Image
              alt="atresplayer background"
              className="rounded-2xl"
              key={atresplayer}
              quality={100}
              src={atresplayer}
            />
          </div>
          <div className="w-1/3">
            <div className="ml-8">
              <h2 className="headline mb-6 text-2xl md:text-4xl lg:text-3xl">
                ATRESplayer
              </h2>
              <p className="mb-4">
                Es un servicio de transmisión de suscripción de video a la carta
                en streaming de vídeo bajo demanda por Internet y televisión de
                Atresmedia. El servicio está disponible en todo el mundo y en
                una amplia gama de dispositivos, incluidos teléfonos móviles y
                tabletas, computadoras personales y televisores inteligentes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

Projects.propTypes = {
  refNode: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any })
  ]).isRequired
};

export default Projects;
