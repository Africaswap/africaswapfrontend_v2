import tokens from 'config/constants/tokens'
import IfoContainer from './components/IfoContainer'
import IfoSteps from './components/IfoSteps'
import ComingSoonSection from './components/ComingSoonSection'

const SoonIfo = () => (
  <IfoContainer
    ifoSection={<ComingSoonSection />}
    ifoSteps={
      <IfoSteps isLive={false} hasClaimed={false} isCommitted={false} ifoCurrencyAddress={tokens.afx.address} />
    }
  />
)

export default SoonIfo
