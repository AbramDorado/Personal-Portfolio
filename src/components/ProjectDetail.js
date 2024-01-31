// ProjectDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { projectId } = useParams();

  // Use projectId to fetch and display project details

  return (
    <div>
      {/* Your ProjectDetail component content */}
      <h2>Project Detail for Project ID: {projectId}</h2>
    </div>
  );
};

export default ProjectDetail;

