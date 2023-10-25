// NeedMatrix.js
import React from 'react';
import Column from './Column';

const NeedMatrix = ({ allocationMatrix, maximumMatrix }) => {
  const calculateNeedMatrix = () => {
    const needMatrix = [];

    for (let i = 0; i < allocationMatrix.length; i++) {
      const needRow = [];
      for (let j = 0; j < allocationMatrix[i].length; j++) {
        const maxVal = parseInt(maximumMatrix[i][j]);
        const allocatedVal = parseInt(allocationMatrix[i][j]);

        if (!isNaN(maxVal) && !isNaN(allocatedVal)) {
          needRow.push(maxVal - allocatedVal);
        } else {
          needRow.push('');
        }
      }
      needMatrix.push(needRow);
    }

    return needMatrix;
  };

  const needMatrix = calculateNeedMatrix();

  return (
    <div className="mt-4 bg-white shadow-xl inline-block p-4 m-4">
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold py-2">Need Matrix</h2>
        <div className="w-16 mx-auto border-b-2"></div>
      </div>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="p-2"></th>
            <th className="p-2">A</th>
            <th className="p-2">B</th>
            <th className="p-2">C</th>
          </tr>
        </thead>
        <tbody>
          {needMatrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <th className="p-2">P{rowIndex + 1}</th>
              {row.map((data, colIndex) => (
                <Column
                  key={colIndex}
                  data={data.toString()} 
                  colIndex={colIndex}
                  rowIndex={rowIndex}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NeedMatrix;