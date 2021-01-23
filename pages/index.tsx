import Layout from '@/components/Layout'
import ResumeBody from '@/components/ResumeBody'
import ResumeProfileSection from '@/components/ResumeProfileSection'

const IndexPage = () => (
  <Layout title="Agustín's Resume">
    <div className="text-base font-sans bg-gray-100 p-8">

      <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-3 gap-4">

        <ResumeProfileSection className="section p-8 max-w-2xl min-w-16"/>

        <ResumeBody className="section col-span-2"/>

      </div>

    </div>
  </Layout>
)

export default IndexPage
