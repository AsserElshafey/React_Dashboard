// import React from 'react'
// import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

// import { SparklineAreaData } from '../../data/dummy';
// import { useStateContext } from '../../contexts/ContextProvider';

// const SparkLine = () => {
//   const { currentColor } = useStateContext();

//   return (
//     <SparklineComponent
//       id='line-sparkline'
//       height='80px'
//       width='250px'
//       lineWidth={1}
//       valueType='Numeric'
//       fill={currentColor}
//       border={{ color: currentColor, width: 2 }}
//       dataSource={SparklineAreaData}
//       xName='x'
//       yName='y'
//       type='Line'
//       tooltipSettings={{
//         visible: true,
//         format: '${x} : data ${y}',
//         trackLineSettings: {
//           visible: true
//         }
//       }}
//     >
//       <Inject services={[SparklineTooltip]} />
//     </SparklineComponent>
//   )
// }

// export default SparkLine