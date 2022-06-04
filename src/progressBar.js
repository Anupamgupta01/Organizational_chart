import React from 'react'
  
const ProgressBar = ({bgcolor,progress,backColor}) => {
     console.log("anupam");
    const Parentdiv = {
        height: '20%',
        width: '98%',
        backgroundColor: backColor,
        borderRadius: 10,
        margin: 2
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
       borderRadius:40,
        textAlign: 'center'
      }
      
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 500
      }
        
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
    )
}
  
export default ProgressBar;