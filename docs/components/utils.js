import React from 'react';
const makeData = (number, titlePrefix = 'Tab') => {
  const data = [];
  for (let i = 0; i < number; i++) {
    data.push({
      title: `${titlePrefix} ${i}`,
      content:
        <div>
          Content {i}: Accusamus enim nisi itaque voluptas nesciunt repudiandae velit. <br/>
          Ad molestiae magni quidem saepe et quia voluptatibus minima. <br/>
          Omnis autem distinctio tempore. Qui omnis eum illum adipisci ab. <br/>
        </div>
    });
  }
  return data;
}

export {makeData};