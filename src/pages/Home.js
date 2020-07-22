import React, { useState, useEffect } from 'react';
import Page from '../components/Page';
import Filter from '../components/Filters';
import List from '../components/List';
import projetos from '../dados/conteudo';

const Home = () => {
  const [projetosFiltrados, setProjetosFiltrados] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filterProjects = () => {
    const filteredProjects = projetos.filter((projeto) => {
      const searchTermLowerCase = searchTerm.toLowerCase();
      const project = projeto.nomeDoProjeto.toLowerCase();
      const name = projeto.nome.toLowerCase();

      return project.includes(searchTermLowerCase) || name.includes(searchTermLowerCase);
    });

    setProjetosFiltrados(filteredProjects);
  };

  const updateSearchTerm = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    if (searchTerm) {
      filterProjects();
    } else {
      setProjetosFiltrados(projetos);
    }
  }, [searchTerm]);

  return (
    <Page>
      <Filter updateSearchTerm={updateSearchTerm} />
      <List projetos={projetosFiltrados} />
    </Page>
  );
};

export default Home;
