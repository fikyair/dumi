import hostedGit from 'hosted-git-info';

export default (url: string) => {
  let repoUrl = hostedGit.fromUrl(url)?.browse();

  if (!repoUrl && url) {
    repoUrl = url.replace(/^.*?((?:[\w-]+\.?)+)+[:/]([\w-]+)\/([\w-]+)\/([\w-]+).*$/, 'https://$1/$2/$3/$4');
  }

  return repoUrl;
};
