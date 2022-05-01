import PropTypes from 'prop-types';
import { Container } from '@/Atoms/Container';
import { Chrono } from 'react-chrono';
import { useTheme } from 'next-themes';

const DARK_COLOR_THEME = 'dark';

const Experience = ({ refNode }) => {
  const { resolvedTheme } = useTheme();

  const currentTheme = () => {
    const oTheme =
      resolvedTheme === DARK_COLOR_THEME
        ? {
            primary: '#CBB682',
            secondary: '#111111',
            cardBgColor: '#111111',
            cardForeColor: '#e9dbbd',
            titleColor: '#e9dbbd'
          }
        : {
            primary: '#FFC94B',
            secondary: '#f2f2f2',
            cardBgColor: '#f2f2f2',
            cardForeColor: '#4a6163',
            titleColor: '#4a6163'
          };

    return oTheme;
  };

  const items = [
    {
      title: 'Mar 2014 - May 2015',
      cardTitle: 'Programador Junior',
      url: 'http://www.dominama.es/',
      cardSubtitle: 'Dominama S.L.',
      cardDetailedText: [
        'Mi primero trabajo en el mundo del desarrollo web fue en el mismo sitio donde hice las practicas finales en el grado superior de DAM. Fue una primera experiencia muy buena, donde pude tocar varias cosas diferentes y aprender mucho de todo. El jefe me daba mucha libertad y confiaba en mis habilidades.'
      ]
    },
    {
      title: 'Jul 2015',
      cardTitle: 'Programador Junior',
      url: 'https://www.keyland.es/',
      cardSubtitle: 'KEYLAND SISTEMAS DE GESTION',
      cardDetailedText: [
        'Mi segunda experiencia profesional fue corta. Después de mi primera experiencia necesitaba conocer una gran empresa con equipos de trabajo mas grandes donde poder aprender de ellos. Mi objetivo era ser desarrollador back con Java, era lo que me hubiera gustado en ese momento, y Keyland me parecio un buen sitio para ello, al poco tiempo me di cuenta que no fue asi, que en el proyecto asignado y la tecnología (Banksphere) utilizada me acabaría estancado y no podría salir de allí, irme fue la mejor decisión que pude tomar para mi.'
      ]
    },
    {
      title: 'Aug 2015 - Nov 2016',
      cardTitle: 'Analista/programador',
      url: 'https://www.agioglobal.com/',
      cardSubtitle: 'AgioGlobal Working TogetherAgioGlobal',
      cardDetailedText: [
        'Está etapa fue de mucho aprendizaje, trabaje en un equipo con varios desarrolladores con mas experiencia que yo y ccon la confianza y oportunidad que me daba el jefe, me encargaron desarrollar la parte front del proyecto y poder ayudar en tareas de la parte de back.'
      ]
    },
    {
      title: 'Aug 2015 - Nov 2016',
      cardTitle: 'Analista/programador',
      url: 'https://www.agioglobal.com/',
      cardSubtitle: 'AgioGlobal Working TogetherAgioGlobal',
      cardDetailedText: [
        'Está etapa fue de mucho aprendizaje, trabaje en un equipo con varios desarrolladores con mas experiencia que yo y ccon la confianza y oportunidad que me daba el jefe, me encargaron desarrollar la parte front del proyecto y poder ayudar en tareas de la parte de back.'
      ]
    },
    {
      title: 'Jan 2017 - Jul 2018',
      cardTitle: 'Programador senior',
      url: 'https://www.alten.es/',
      cardSubtitle: 'ALTEN SPAIN',
      cardDetailedText: [
        'Está etapa fue de mucho aprendizaje, trabaje en un equipo con varios desarrolladores con mas experiencia que yo y ccon la confianza y oportunidad que me daba el jefe, me encargaron desarrollar la parte front del proyecto y poder ayudar en tareas de la parte de back.'
      ]
    },
    {
      title: 'Aug 2018 - Feb 2019',
      cardTitle: 'Engineer Software',
      url: 'https://www.atsistemas.com/es',
      cardSubtitle: 'ATsistemas',
      cardDetailedText: [
        'Está etapa fue de mucho aprendizaje, trabaje en un equipo con varios desarrolladores con mas experiencia que yo y ccon la confianza y oportunidad que me daba el jefe, me encargaron desarrollar la parte front del proyecto y poder ayudar en tareas de la parte de back.'
      ]
    },
    {
      title: 'Mar 2019 - Apr 2019',
      cardTitle: 'Desarrollador IT',
      url: 'https://www.klikin.com/',
      cardSubtitle: 'Klikin',
      cardDetailedText: [
        'Está etapa fue de mucho aprendizaje, trabaje en un equipo con varios desarrolladores con mas experiencia que yo y ccon la confianza y oportunidad que me daba el jefe, me encargaron desarrollar la parte front del proyecto y poder ayudar en tareas de la parte de back.'
      ]
    },
    {
      title: 'May 2019 - ACT',
      cardTitle: 'Front-end developer',
      url: 'https://www.plexus.es/',
      cardSubtitle: 'Plexus Tech',
      cardDetailedText: [
        'Está etapa fue de mucho aprendizaje, trabaje en un equipo con varios desarrolladores con mas experiencia que yo y ccon la confianza y oportunidad que me daba el jefe, me encargaron desarrollar la parte front del proyecto y poder ayudar en tareas de la parte de back.'
      ]
    }
  ];

  return (
    <Container ref={refNode} id={'experience'}>
      <Chrono
        activeItemIndex={items.length - 1}
        items={items}
        theme={currentTheme()}
        mode="HORIZONTAL"
        borderLessCards={true}
        hideControls={true}
      />
    </Container>
  );
};

Experience.propTypes = {
  refNode: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any })
  ]).isRequired
};

export default Experience;
