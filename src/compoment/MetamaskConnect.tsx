import { useWeb3React } from '@web3-react/core'
import React from 'react'
import { useInactiveListener } from '../hooks/useMatemask'
import { injected } from '../utils/connectors'

function MetamaskConnect(props: { triedEager: any }) {
  const context = useWeb3React()
  const { connector, chainId, activate, deactivate, error } = context

  const [activatingConnector, setActivatingConnector] = React.useState()
  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector])

  const activating = injected === activatingConnector
  const connected = injected === connector
  const disabled = !props.triedEager || !!activatingConnector || !!error

  useInactiveListener(!props.triedEager || !!activatingConnector)

  const isDisconnect = !error && chainId
  const buttonText = isDisconnect
    ? 'Disconnect'
    : activating
    ? 'Connectting'
    : 'Connect'

  return (
    <div
      style={{
        borderColor: activating ? 'orange' : connected ? 'green' : 'unset',
        cursor: disabled ? 'unset' : 'pointer',
        position: 'relative',
      }}
      className="ConnectButton"
      onClick={() => {
        console.log(1)

        if (!isDisconnect) {
          setActivatingConnector(injected as any)
          activate(injected)
        } else {
          deactivate()
        }
      }}
    >
      <p
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          color: 'black',
          margin: '0 0 0 1rem',
        }}
      >
        {activating}
      </p>
      {buttonText}
    </div>
  )
}
export default MetamaskConnect
