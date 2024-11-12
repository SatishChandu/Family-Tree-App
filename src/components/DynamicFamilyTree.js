// import React, { useState, useEffect } from 'react';
// import { Modal, Form, Button, FloatingLabel } from 'react-bootstrap';
// import Tree from 'react-d3-tree';
// import { Plus, User } from 'lucide-react';

// const DynamicFamilyTree = () => {
//   const [treeData, setTreeData] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     dateOfBirth: '',
//     gender: '',
//     relationship: '',
//     occupation: '',
//     isAlive: true,
//   });
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     setDimensions({
//       width: window.innerWidth * 0.9,
//       height: window.innerHeight * 0.85,
//     });

//     const handleResize = () => {
//       setDimensions({
//         width: window.innerWidth * 0.9,
//         height: window.innerHeight * 0.85,
//       });
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleModalSubmit = () => {
//     if (!formData.firstName || !formData.relationship) {
//       alert('Please fill in all required fields');
//       return;
//     }

//     const newNode = {
//       name: `${formData.firstName} ${formData.lastName || ''}`,
//       attributes: { ...formData },
//       children: [],
//     };

//     if (!treeData) {
//       setTreeData(newNode);
//     } else if (selectedNode) {
//       const updateTreeData = (nodes) => {
//         if (!nodes) return nodes;
//         return nodes.map(node => {
//           if (node === selectedNode) {
//             return {
//               ...node,
//               children: [...(node.children || []), newNode],
//             };
//           }
//           if (node.children) {
//             return {
//               ...node,
//               children: updateTreeData(node.children),
//             };
//           }
//           return node;
//         });
//       };

//       setTreeData((prev) =>
//         Array.isArray(prev)
//           ? updateTreeData(prev)
//           : { ...prev, children: [...(prev.children || []), newNode] }
//       );
//     }

//     setShowModal(false);
//     setFormData({
//       firstName: '',
//       lastName: '',
//       dateOfBirth: '',
//       gender: '',
//       relationship: '',
//       occupation: '',
//       isAlive: true,
//     });
//   };

//   const getNodeColor = (gender, isAlive) => {
//     if (!isAlive) return '#gray';
//     return gender === 'female' ? '#FFC0CB' : '#ADD8E6';
//   };

//   const renderCustomNode = ({ nodeDatum, toggleNode }) => {
//     const gender = nodeDatum.attributes?.gender || 'male';
//     const isAlive = nodeDatum.attributes?.isAlive;
//     const isFocused = nodeDatum.attributes?.relationship === 'self';

//     return (
//       <>
//         <foreignObject
//           width={200}  // Increased width from 150 to 200
//           height={140} // Increased height from 120 to 140 to accommodate the button
//           x={-100}     // Adjusted x to center the wider card
//           y={-60}
//           className="node-card"
//         >
//           <div className="bg-white rounded-lg shadow-lg p-4 border-2 border-gray-200 w-full h-full flex flex-col items-center justify-center relative">
//             {/* Avatar circle */}
//             <div
//               className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
//               style={{
//                 backgroundColor: getNodeColor(gender, isAlive),
//                 border: '2px solid #gray'
//               }}
//             >
//               <User className="w-6 h-6 text-gray-600" />
//             </div>
            
//             {/* Name and details - Added text truncation */}
//             <div className="text-center w-full">
//               <div className="font-semibold text-sm truncate px-2" style={{ maxWidth: "180px" }}>
//                 {nodeDatum.name}
//               </div>
//               <div className="text-xs text-gray-500 mt-1">
//                 {isAlive ? 'Living' : 'Deceased'}
//               </div>
//             </div>

//             {/* Add relative button - Adjusted positioning */}
//             <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
//               <Button
//                 size="sm"
//                 variant="light"
//                 className="rounded-full shadow-sm border border-gray-300 p-1 bg-white hover:bg-gray-100"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setSelectedNode(nodeDatum);
//                   setShowModal(true);
//                 }}
//               >
//                 <Plus className="w-3 h-3" /> {/* Increased icon size slightly */}
//               </Button>
//             </div>

//             {/* Focus indicator */}
//             {isFocused && (
//               <div className="absolute -bottom-2 w-full h-1 bg-green-500" />
//             )}
//           </div>
//         </foreignObject>
//       </>
//     );
//   };

//   return (
//     <div className="h-screen bg-gray-50 p-4">
//       {!treeData && (
//         <div className="flex items-center justify-center h-full">
//           <Button
//             variant="primary"
//             onClick={() => {
//               setFormData((prev) => ({ ...prev, relationship: 'self' }));
//               setShowModal(true);
//             }}
//           >
//             <User className="w-5 h-5 mr-2" />
//             Start Your Family Tree
//           </Button>
//         </div>
//       )}

//       {treeData && (
//         <div style={{ width: '100%', height: '100%' }}>
//           <Tree
//             data={treeData}
//             renderCustomNodeElement={renderCustomNode}
//             orientation="vertical"
//             pathFunc="step"
//             translate={{ x: dimensions.width / 2, y: 100 }}
//             separation={{ siblings: 2.2, nonSiblings: 2.7 }} // Increased separation
//             zoom={0.8}
//             nodeSize={{ x: 320, y: 250 }} // Adjusted node size
//             pathClassFunc={() => 'stroke-current text-gray-400'}
//           />
//         </div>
//       )}

//       <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>
//             {selectedNode ? `Add Relative to ${selectedNode.name}` : 'Start Your Family Tree'}
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form className="grid grid-cols-2 gap-4">
//             <Form.Group className="col-span-1">
//               <FloatingLabel label="First Name *">
//                 <Form.Control
//                   type="text"
//                   value={formData.firstName}
//                   onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
//                   placeholder="Enter first name"
//                 />
//               </FloatingLabel>
//             </Form.Group>
//             <Form.Group className="col-span-1">
//               <FloatingLabel label="Last Name">
//                 <Form.Control
//                   type="text"
//                   value={formData.lastName}
//                   onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
//                   placeholder="Enter last name"
//                 />
//               </FloatingLabel>
//             </Form.Group>
//             <Form.Group className="col-span-1">
//               <FloatingLabel label="Date of Birth">
//                 <Form.Control
//                   type="date"
//                   value={formData.dateOfBirth}
//                   onChange={(e) => setFormData((prev) => ({ ...prev, dateOfBirth: e.target.value }))}
//                 />
//               </FloatingLabel>
//             </Form.Group>
//             <Form.Group className="col-span-1">
//               <FloatingLabel label="Gender">
//                 <Form.Select
//                   value={formData.gender}
//                   onChange={(e) => setFormData((prev) => ({ ...prev, gender: e.target.value }))}
//                 >
//                   <option value="">Select gender</option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </Form.Select>
//               </FloatingLabel>
//             </Form.Group>

//             {selectedNode && (
//               <Form.Group className="col-span-1">
//                 <FloatingLabel label="Relationship *">
//                   <Form.Select
//                     value={formData.relationship}
//                     onChange={(e) => setFormData((prev) => ({ ...prev, relationship: e.target.value }))}
//                   >
//                     <option value="">Select relationship</option>
//                     <option value="father">Father</option>
//                     <option value="mother">Mother</option>
//                     <option value="spouse">Spouse</option>
//                     <option value="child">Child</option>
//                     <option value="sibling">Sibling</option>
//                   </Form.Select>
//                 </FloatingLabel>
//               </Form.Group>
//             )}

//             <Form.Group className="col-span-1">
//               <FloatingLabel label="Occupation">
//                 <Form.Control
//                   type="text"
//                   value={formData.occupation}
//                   onChange={(e) => setFormData((prev) => ({ ...prev, occupation: e.target.value }))}
//                   placeholder="Enter occupation"
//                 />
//               </FloatingLabel>
//             </Form.Group>

//             <Form.Group className="col-span-2">
//               <Form.Check
//                 type="checkbox"
//                 label="Is this person alive?"
//                 checked={formData.isAlive}
//                 onChange={(e) => setFormData((prev) => ({ ...prev, isAlive: e.target.checked }))}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleModalSubmit}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default DynamicFamilyTree;


import React, { useState, useEffect } from 'react';
import { Modal, Form, Button, FloatingLabel } from 'react-bootstrap';
import Tree from 'react-d3-tree';
import { Plus, User } from 'lucide-react';

const DynamicFamilyTree = () => {
  const [treeData, setTreeData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    relationship: '',
    occupation: '',
    isAlive: true,
  });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth * 0.9,
      height: window.innerHeight * 0.85,
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth * 0.9,
        height: window.innerHeight * 0.85,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleModalSubmit = () => {
    if (!formData.firstName || !formData.relationship) {
      alert('Please fill in all required fields');
      return;
    }

    const newNode = {
      name: `${formData.firstName} ${formData.lastName || ''}`,
      attributes: { ...formData },
      children: [],
    };

    if (!treeData) {
      setTreeData(newNode);
    } else if (selectedNode) {
      const updateTreeData = (nodes) => {
        if (!nodes) return nodes;
        return nodes.map(node => {
          if (node === selectedNode) {
            const existingChildren = node.children || [];
            const newChildren = formData.relationship === 'spouse'
              ? [newNode, ...existingChildren]
              : [...existingChildren, newNode];
            return {
              ...node,
              children: newChildren,
            };
          }
          if (node.children) {
            return {
              ...node,
              children: updateTreeData(node.children),
            };
          }
          return node;
        });
      };

      setTreeData((prev) =>
        Array.isArray(prev)
          ? updateTreeData(prev)
          : { ...prev, children: [...(prev.children || []), newNode] }
      );
    }

    setShowModal(false);
    setFormData({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: '',
      relationship: '',
      occupation: '',
      isAlive: true,
    });
  };

  const getNodeColor = (gender, isAlive) => {
    if (!isAlive) return '#gray';
    return gender === 'female' ? '#FFC0CB' : '#ADD8E6';
  };

  const renderCustomNode = ({ nodeDatum, toggleNode }) => {
    const gender = nodeDatum.attributes?.gender || 'male';
    const isAlive = nodeDatum.attributes?.isAlive;
    const isFocused = nodeDatum.attributes?.relationship === 'self';
    const isSpouse = nodeDatum.attributes?.relationship === 'spouse';
    const isChild = nodeDatum.attributes?.relationship === 'child';
    const isParent = nodeDatum.attributes?.relationship === 'father' || nodeDatum.attributes?.relationship === 'mother';

    return (
      <>
        <foreignObject
          width={200}
          height={140}
          x={isSpouse || isChild ? 0 : -100}
          y={isParent ? -80 : -60}
          className="node-card"
        >
          <div className="bg-white rounded-lg shadow-lg p-4 border-2 border-gray-200 w-full h-full flex flex-col items-center justify-center relative">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
              style={{
                backgroundColor: getNodeColor(gender, isAlive),
                border: '2px solid #gray'
              }}
            >
              <User className="w-6 h-6 text-gray-600" />
            </div>
            <div className="text-center w-full">
              <div className="font-semibold text-sm truncate px-2" style={{ maxWidth: "180px" }}>
                {nodeDatum.name}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {isAlive ? 'Living' : 'Deceased'}
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <Button
                size="sm"
                variant="light"
                className="rounded-full shadow-sm border border-gray-300 p-1 bg-white hover:bg-gray-100"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedNode(nodeDatum);
                  setShowModal(true);
                }}
              >
                <Plus className="w-3 h-3" />
              </Button>
            </div>
            {isFocused && (
              <div className="absolute -bottom-2 w-full h-1 bg-green-500" />
            )}
          </div>
        </foreignObject>
      </>
    );
  };

  return (
    <div className="h-screen bg-gray-50 p-4">
      {!treeData && (
        <div className="flex items-center justify-center h-full">
          <Button
            variant="primary"
            onClick={() => {
              setFormData((prev) => ({ ...prev, relationship: 'self' }));
              setShowModal(true);
            }}
          >
            <User className="w-5 h-5 mr-2" />
            Start Your Family Tree
          </Button>
        </div>
      )}
      {treeData && (
        <div style={{ width: '100%', height: '100%' }}>
          <Tree
            data={treeData}
            renderCustomNodeElement={renderCustomNode}
            orientation="vertical"
            pathFunc="step"
            translate={{ x: dimensions.width / 2, y: 100 }}
            separation={{ parents: 1.5, siblings: 1.5 }}
            zoom={0.8}
            nodeSize={{ x: 320, y: 250 }}
            pathClassFunc={(linkDatum) => {
              if (linkDatum.source.attributes?.relationship === 'spouse') {
                return 'stroke-current text-gray-400 diagonal';
              }
              return 'stroke-current text-gray-400';
            }}
          />
        </div>
      )}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedNode ? `Add Relative to ${selectedNode.name}` : 'Start Your Family Tree'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="grid grid-cols-2 gap-4">
            <Form.Group className="col-span-1">
              <FloatingLabel label="First Name *">
                <Form.Control
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                  placeholder="Enter first name"
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="col-span-1">
              <FloatingLabel label="Last Name">
                <Form.Control
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                  placeholder="Enter last name"
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="col-span-1">
              <FloatingLabel label="Date of Birth">
                <Form.Control
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData((prev) => ({ ...prev, dateOfBirth: e.target.value }))}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="col-span-1">
              <FloatingLabel label="Gender">
                <Form.Select
                  value={formData.gender}
                  onChange={(e) => setFormData((prev) => ({ ...prev, gender: e.target.value }))}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Form.Select>
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="col-span-1">
              <FloatingLabel label="Occupation">
                <Form.Control
                  type="text"
                  value={formData.occupation}
                  onChange={(e) => setFormData((prev) => ({ ...prev, occupation: e.target.value }))}
                  placeholder="Enter occupation"
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="col-span-1">
              <FloatingLabel label="Relationship *">
                <Form.Select
                  value={formData.relationship}
                  onChange={(e) => setFormData((prev) => ({ ...prev, relationship: e.target.value }))}
                >
                  <option value="">Select Relationship</option>
                  <option value="self">Self</option>
                  <option value="father">Father</option>
                  <option value="mother">Mother</option>
                  <option value="spouse">Spouse</option>
                  <option value="child">Child</option>
                  <option value="sibling">Sibling</option>
                  <option value="grandfather">Grandfather</option>
                  <option value="grandmother">Grandmother</option>
                </Form.Select>
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="col-span-2">
              <Form.Check
                type="checkbox"
                label="Is Alive"
                checked={formData.isAlive}
                onChange={(e) => setFormData((prev) => ({ ...prev, isAlive: e.target.checked }))}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleModalSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DynamicFamilyTree;

