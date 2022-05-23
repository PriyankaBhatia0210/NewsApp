import React from 'react'

const Spinner = ()=> {
  let loading = 'https://raw.githubusercontent.com/CodeWithHarry/NewsMonkey-React/master/src/components/loading.gif'
        return (
            <div className="text-center">
                <img className="my-3" src={loading} alt="loading" />
            </div>
        )
}

export default Spinner