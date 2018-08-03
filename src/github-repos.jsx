export default {
  name: 'github-repos',
  // component props
  props: {
    // github username, required
    username: {
      type: String,
      required: true,
    },
    // amount of repos to show
    amount: {
      type: Number,
      default: 5,
    },
  },
  // initial state
  state() {
    return {
      repos: [],
    };
  },
  // life cycle method when component mounted
  componentDidMount() {
    const self = this;
    // get passed prop values
    const { username, amount } = self.props;
    // fetch GitHub API
    fetch(`https://api.github.com/users/${username}/repos?type=owner`)
      .then(response => response.json())
      .then((repos) => {
        // Update component state with loaded repos
        self.setState({
          repos: repos
            // sort by stargazers count
            .sort((a,b) => b.stargazers_count - a.stargazers_count)
            // get specified amount
            .slice(0, amount || 5)
        });
      });
  },
  // render layout
  render() {
    const self = this;

    return (
      <div className="github-repos">
        {self.state.repos.map((repo) => (
          <div className="repo">
            <div className="repo-avatar">
              <img src={repo.owner.avatar_url} />
            </div>
            <div className="repo-content">
              <div className="repo-name">
                <a href={repo.html_url} target="_blank">{self.props.username}/{repo.name}</a>
              </div>
              <div className="repo-description">{repo.description}</div>
              <ul className="repo-stats">
                <li><b>{repo.stargazers_count}</b> stars</li>
                <li><b>{repo.forks_count}</b> forks</li>
                <li><b>{repo.open_issues_count}</b> issues opened</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    )
  },
};