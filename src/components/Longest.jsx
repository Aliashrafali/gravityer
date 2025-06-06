import React, { useState } from 'react';

const Longest = () => {
  const [array, setArray] = useState([10, 9, 2, 5, 3, 7, 101, 18]);
  const [length, setLength] = useState(0);

  const calculateLIS = () => {
    const nums = [...array];
    const tails = [];

    for (let num of nums) {
      let left = 0, right = tails.length;

      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (tails[mid] < num) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }

      if (left < tails.length) {
        tails[left] = num;
      } else {
        tails.push(num);
      }
    }

    setLength(tails.length);
  };

  return (
    <>
      <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-3 col-md-3'></div>
              <div className='col-12 col-lg-6 col-md-6'>
                  <div style={{ padding: '20px' }} className='card1'>
                    <h2 className='text-center'>Longest Increasing Subsequence</h2>
                    <p className='text-center text-danger'>Array: {JSON.stringify(array)}</p>
                    <div style={{display:'block', textAlign:'center'}}>
                        <button onClick={calculateLIS} className='btn btn-primary btn-sm'>Calculate LIS Length</button>
                    </div>
                    <h3 className='text-center mt-3'>Length: [ {length} ]</h3>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
};

export default Longest
