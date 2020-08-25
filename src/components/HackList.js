// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import { fetchHacks } from '../actions/actions';

// const HackList = props => {

//     useEffect(() => {
//         props.fetchHacks();
//     }, []);

//     return (
//         <div>
//             {props.isLoading ? <h2>Loading...</h2> : null}
//             {props.error ? <h2>Error</h2> : null}
//             {props.hack.length > 0 ? (
//                 <div>
//                     {props.hack.map((hack) => (
//                         <div>
//                             <h2 key={hack.id}>
//                                 Hack:{hack.hackName}
//                                 Description:{hack.description}
//                                 Steps:{hack.steps}
//                             </h2>
//                         </div>
//                     ))}
//                 </div>
//             ) : null}
//         </div>
//     )
// };

// const mapStateToProps = state => {
//     return {
//         hack: state.hack,
//         isLoading: state.isLoading,
//         error: state.error
//     }
// };

// export default connect(mapStateToProps, { fetchHacks })(HackList);