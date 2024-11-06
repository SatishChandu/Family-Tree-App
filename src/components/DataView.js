// import React, { useState, useEffect } from 'react';
// import { getFamilyData, getPersonData, deleteFamilyData, deletePersonData } from '../Util';
// import { Card, Badge, Row, Col, Container, Button } from 'react-bootstrap';
// import '../App.css';

// const DataView = () => {
//     const [familyData, setFamilyData] = useState([]);
//     const [personData, setPersonData] = useState([]);

//     useEffect(() => {
//         setFamilyData(getFamilyData());
//         setPersonData(getPersonData());
//     }, []);

//     const handleDeleteFamily = (id) => {
//         if (window.confirm('Are you sure you want to delete this family record?')) {
//             const updatedData = deleteFamilyData(id);
//             setFamilyData(updatedData);
//         }
//     };

//     const handleDeletePerson = (id) => {
//         if (window.confirm('Are you sure you want to delete this person record?')) {
//             const updatedData = deletePersonData(id);
//             setPersonData(updatedData);
//         }
//     };

//     const EmptyState = ({ title }) => (
//         <div className="no-data-message">
//             <h5 className="text-muted">{title}</h5>
//             <p className="mb-0">No records found. Add some data to see it here.</p>
//         </div>
//     );

//     return (
//         <Container fluid className="py-4">
//             <h3 className="mb-4">
//                 Family Records 
//                 <Badge bg="primary" className="ms-2">{familyData.length}</Badge>
//             </h3>
//             {familyData.length > 0 ? (
//             <Row className="g-4 mb-5">
//                 {familyData.map(data => (
//                     <Col key={data.id} xs={12} md={6} lg={4} xl={3}>
//                         <Card className="h-100 shadow-sm hover-card">
//                             <Card.Header className="bg-primary text-white d-flex justify-content-between align-items-center">
//                                 <h5 className="mb-0">Family ID: {data.id}</h5>
//                                 <Button 
//                                     variant="light" 
//                                     size="sm" 
//                                     onClick={() => handleDeleteFamily(data.id)}
//                                     className="text-danger"
//                                 >
//                                     Delete
//                                 </Button>
//                             </Card.Header>
//                             <Card.Body>
//                                 <div className="mb-3">
//                                     <strong>Surname:</strong>
//                                     <p className="text-muted mb-2">{data.surname}</p>
//                                 </div>
//                                 <div className="mb-3">
//                                     <strong>Gothram:</strong>
//                                     <p className="text-muted mb-2">{data.gothram}</p>
//                                 </div>
//                                 <div className="mb-3">
//                                     <strong>Origin:</strong>
//                                     <p className="text-muted mb-0">{data.origin}</p>
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//             ) : (
//                 <EmptyState title="No Family Records" />
//             )}

//             <h3 className="mb-4">
//                 Person Records
//                 <Badge bg="success" className="ms-2">{personData.length}</Badge>
//             </h3>
//             {personData.length > 0 ? (
//             <Row className="g-4">
//                 {personData.map(data => (
//                     <Col key={data.id} xs={12} md={6} lg={4} xl={3}>
//                         <Card className="h-100 shadow-sm hover-card">
//                             <Card.Header className="bg-success text-white d-flex justify-content-between align-items-center">
//                                 <h5 className="mb-0">{data.firstName} {data.middleName}</h5>
//                                 <Button 
//                                     variant="light" 
//                                     size="sm" 
//                                     onClick={() => handleDeletePerson(data.id)}
//                                     className="text-danger"
//                                 >
//                                     Delete
//                                 </Button>
//                             </Card.Header>
//                             <Card.Body>
//                                 <div className="person-details">
//                                     <div className="detail-item mb-2">
//                                         <strong>Gender:</strong>
//                                         <span className="text-muted ms-2">{data.gender}</span>
//                                     </div>
//                                     <div className="detail-item mb-2">
//                                         <strong>Date of Birth:</strong>
//                                         <span className="text-muted ms-2">{data.dateOfBirth}</span>
//                                     </div>
//                                     <div className="detail-item mb-2">
//                                         <strong>Father's Name:</strong>
//                                         <span className="text-muted ms-2">{data.fatherName}</span>
//                                     </div>
//                                     <div className="detail-item mb-2">
//                                         <strong>Mother's Name:</strong>
//                                         <span className="text-muted ms-2">{data.motherName}</span>
//                                     </div>
//                                     <div className="detail-item mb-2">
//                                         <strong>Grand Father Name:</strong>
//                                         <span className="text-muted ms-2">{data.grandMotherName}</span>
//                                     </div>
//                                     <div className="detail-item mb-2">
//                                         <strong>Grand Mother Name:</strong>
//                                         <span className="text-muted ms-2">{data.grandFatherName}</span>
//                                     </div>
//                                     <div className="detail-item mb-2">
//                                         <strong>Siblings:</strong>
//                                         <span className="text-muted ms-2">{data.siblings}</span>
//                                     </div>
//                                     <div className="detail-item mb-2">
//                                         <strong>Occupation:</strong>
//                                         <span className="text-muted ms-2">{data.occupation}</span>
//                                     </div>
//                                     <div className="detail-item mb-2">
//                                         <strong>Marital Status:</strong>
//                                         <Badge bg={data.maritalStatus === 'Married' ? 'success' : 
//                                                data.maritalStatus === 'Single' ? 'primary' : 'warning'}
//                                                className="ms-2">
//                                             {data.maritalStatus}
//                                         </Badge>
//                                     </div>
//                                     {data.address && (
//                                         <div className="detail-item">
//                                             <strong>Address:</strong>
//                                             <p className="text-muted mb-0 mt-1">{data.address}</p>
//                                         </div>
//                                     )}
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//             ) : (
//                 <EmptyState title="No Person Records" />
//             )}
//         </Container>
//     );
// };

// export default DataView;

//Tree representation
import React, { useState, useEffect } from 'react';
import { getFamilyData, getPersonData } from '../Util';
import { Container, Card } from 'react-bootstrap';
import Tree from 'react-d3-tree';
import '../App.css';

const DataView = () => {
    const [treeData, setTreeData] = useState([]);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const containerRef = React.useRef(null);

    useEffect(() => {
        const familyData = getFamilyData();
        const personData = getPersonData();

        const dataTree = familyData.map(family => ({
            name: `Family ID: ${family.id}`,
            attributes: {
                Surname: family.surname,
                Gothram: family.gothram,
                Origin: family.origin,
            },
            children: personData
                .filter(person => person.familyId === family.id)
                .map(person => ({
                    name: `${person.firstName} ${person.middleName}`,
                    attributes: {
                        Gender: person.gender,
                        DOB: person.dateOfBirth,
                        Father: person.fatherName,
                        Mother: person.motherName,
                        Occupation: person.occupation,
                        "Marital Status": person.maritalStatus,
                    },
                    children: person.siblings.map((sibling, index) => ({
                        name: `Sibling ${index + 1}: ${sibling}`,
                    }))
                }))
        }));

        setTreeData(dataTree);
    }, []);

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.offsetWidth,
                    height: window.innerHeight * 0.8
                });
            }
        };

        window.addEventListener('resize', updateDimensions);
        updateDimensions();

        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const renderNodeWithCustomLabel = ({ nodeDatum, toggleNode }) => {
        const isFamily = nodeDatum.name.includes('Family ID:');
        const isPerson = nodeDatum.attributes?.Gender;
        const isSibling = nodeDatum.name.includes('Sibling');

        const getNodeStyle = () => {
            if (isFamily) return { fill: '#4A90E2', stroke: '#2171C7' };
            if (isPerson) return { fill: '#50C878', stroke: '#2E8B57' };
            return { fill: '#FF7F50', stroke: '#FF6347' };
        };

        const getTextColor = () => {
            if (isFamily) return '#1a365d';
            if (isPerson) return '#1a4731';
            return '#7c2d12';
        };

        return (
            <g className="node-container">
                {/* Node circle with hover effect */}
                <circle
                    r={isFamily ? 20 : isPerson ? 18 : 15}
                    {...getNodeStyle()}
                    className="node-circle"
                    onClick={toggleNode}
                    style={{
                        cursor: 'pointer',
                        filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.2))',
                    }}
                />

                {/* Node content */}
                <foreignObject
                    width="200"
                    height="200"
                    x="25"
                    y="-50"
                    style={{ overflow: 'visible' }}
                >
                    <div style={{ 
                        background: 'white',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        border: '1px solid #e5e7eb',
                        fontSize: isFamily ? '14px' : '12px',
                        color: getTextColor(),
                        maxWidth: '180px'
                    }}>
                        <strong>{nodeDatum.name}</strong>
                        {nodeDatum.attributes && (
                            <div style={{ marginTop: '4px' }}>
                                {Object.entries(nodeDatum.attributes).map(([key, value], i) => (
                                    <div key={i} style={{ 
                                        fontSize: '11px',
                                        color: '#666',
                                        marginTop: '2px'
                                    }}>
                                        <span style={{ fontWeight: '500' }}>{key}:</span> {value}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </foreignObject>
            </g>
        );
    };

    // Custom styles for the tree
    const customStyles = {
        nodes: {
            node: {
                circle: {
                    fill: '#fff',
                },
                attributes: {
                    stroke: '#fff',
                },
            },
        },
        links: {
            stroke: '#919191',
            strokeWidth: 2,
        },
    };

    return (
        <Container fluid className="py-4" ref={containerRef}>
            <Card className="shadow-sm">
                <Card.Header className="bg-white">
                    <h3 className="mb-0">Family and Person Hierarchy</h3>
                </Card.Header>
                <Card.Body className="p-0">
                    <div style={{ width: '100%', height: dimensions.height }}>
                        {treeData.length > 0 ? (
                            <Tree
                                data={treeData}
                                renderCustomNodeElement={renderNodeWithCustomLabel}
                                orientation="vertical"
                                pathFunc="step"
                                translate={{ 
                                    x: dimensions.width / 2, 
                                    y: 50 
                                }}
                                separation={{ siblings: 2, nonSiblings: 2.5 }}
                                zoom={0.8}
                                enableLegacyTransitions={true}
                                transitionDuration={800}
                                styles={customStyles}
                                nodeSize={{ x: 250, y: 150 }}
                                zoomable={true}
                                draggable={true}
                            />
                        ) : (
                            <div className="d-flex align-items-center justify-content-center h-100">
                                <div className="text-center text-muted">
                                    <h5>No Data Available</h5>
                                    <p className="mb-0">Add family and person records to view the hierarchy.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </Card.Body>
            </Card>

            <style jsx>{`
                .node-circle {
                    transition: all 0.3s ease;
                }
                .node-circle:hover {
                    filter: brightness(1.1) drop-shadow(0 4px 6px rgba(0,0,0,0.3)) !important;
                    transform: scale(1.1);
                }
            `}</style>
        </Container>
    );
};

export default DataView;