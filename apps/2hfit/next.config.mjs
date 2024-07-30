export default (phase, { defaultConfig }) => {

  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    transpilePackages: ["@site/components"],
  }


  return nextConfig
}
