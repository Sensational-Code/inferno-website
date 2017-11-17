import Inferno from 'inferno'

export default () => (
  <svg width="50" height="50" viewBox={`0 0 60 60`}>
    <g>
      <path
        d="m 14.68421,32.55938 c -1.40395,0 -2.55263,1.15171 -2.55263,2.55937 0,1.40766 1.14868,2.55937 2.55263,2.55937 1.40395,
            0 2.55263,-1.15171 2.55263,-2.55937 0,-1.40766 -1.14868,-2.55937 -2.55263,-2.55937 z m 0,10.2375 c -1.40395,0 -2.55263,
            1.15171 -2.55263,2.55937 0,1.40766 1.14868,2.55938 2.55263,2.55938 1.40395,0 2.55263,-1.15172 2.55263,-2.55938 0,-1.40766 -1.14868,
            -2.55937 -2.55263,-2.55937 z m 0,-20.475 c -1.40395,0 -2.55263,1.15171 -2.55263,2.55937 0,1.40766 1.14868,2.55938 2.55263,
            2.55938 1.40395,0 2.55263,-1.15172 2.55263,-2.55938 0,-1.40766 -1.14868,-2.55937 -2.55263,-2.55937 z m -7.65789,1.27968 c -0.70198,
            0 -1.27632,0.57586 -1.27632,1.27969 0,0.70383 0.57434,1.27969 1.27632,1.27969 0.70197,0 1.27631,-0.57586 1.27631,-1.27969 0,
            -0.70383 -0.57434,-1.27969 -1.27631,-1.27969 z m 7.65789,-11.51718 c -1.40395,0 -2.55263,1.15172 -2.55263,2.55937 0,1.40766 1.14868,
            2.55938 2.55263,2.55938 1.40395,0 2.55263,-1.15172 2.55263,-2.55938 0,-1.40765 -1.14868,-2.55937 -2.55263,-2.55937 z m 38.28947,
            14.07656 c 0.70198,0 1.27632,-0.57586 1.27632,-1.27969 0,-0.70383 -0.57434,-1.27969 -1.27632,-1.27969 -0.70197,0 -1.27631,0.57586 -1.27631,
            1.27969 0,0.70383 0.57434,1.27969 1.27631,1.27969 z M 35.10526,17.20313 c 1.40395,0 2.55264,-1.15172 2.55264,-2.55938 0,-1.40765 -1.14869,
            -2.55937 -2.55264,-2.55937 -1.40394,0 -2.55263,1.15172 -2.55263,2.55937 0,1.40766 1.14869,2.55938 2.55263,2.55938 z m 0,-8.95782 c 0.70198,
            0 1.27632,-0.57585 1.27632,-1.27968 0,-0.70383 -0.57434,-1.27969 -1.27632,-1.27969 -0.70197,0 -1.27631,0.57586 -1.27631,1.27969 0,0.70383 0.57434,
            1.27968 1.27631,1.27968 z M 7.02632,33.83906 c -0.70198,0 -1.27632,0.57586 -1.27632,1.27969 0,0.70383 0.57434,1.27969 1.27632,1.27969 0.70197,
            0 1.27631,-0.57586 1.27631,-1.27969 0,-0.70383 -0.57434,-1.27969 -1.27631,-1.27969 z m 17.86842,17.91563 c -0.70198,0 -1.27632,0.57586 -1.27632,
            1.27968 0,0.70383 0.57434,1.27969 1.27632,1.27969 0.70197,0 1.27631,-0.57586 1.27631,-1.27969 0,-0.70382 -0.57434,-1.27968 -1.27631,-1.27968 z m 0,
            -43.50938 c 0.70197,0 1.27631,-0.57585 1.27631,-1.27968 0,-0.70383 -0.57434,-1.27969 -1.27631,-1.27969 -0.70198,0 -1.27632,0.57586 -1.27632,
            1.27969 0,0.70383 0.57434,1.27968 1.27632,1.27968 z m 0,8.95782 c 1.40394,0 2.55263,-1.15172 2.55263,-2.55938 0,-1.40765 -1.14869,-2.55937 -2.55263,
            -2.55937 -1.40395,0 -2.55264,1.15172 -2.55264,2.55937 0,1.40766 1.14869,2.55938 2.55264,2.55938 z m 0,14.07656 c -2.11869,0 -3.82895,1.71478 -3.82895,
            3.83906 0,2.12428 1.71026,3.83906 3.82895,3.83906 2.11868,0 3.82894,-1.71478 3.82894,-3.83906 0,-2.12428 -1.71026,-3.83906 -3.82894,-3.83906 z m 20.42105,
            1.27969 c -1.40395,0 -2.55263,1.15171 -2.55263,2.55937 0,1.40766 1.14868,2.55937 2.55263,2.55937 1.40395,0 2.55263,-1.15171 2.55263,-2.55937 0,
            -1.40766 -1.14868,-2.55937 -2.55263,-2.55937 z m 0,10.2375 c -1.40395,0 -2.55263,1.15171 -2.55263,2.55937 0,1.40766 1.14868,2.55938 2.55263,
            2.55938 1.40395,0 2.55263,-1.15172 2.55263,-2.55938 0,-1.40766 -1.14868,-2.55937 -2.55263,-2.55937 z m 0,-20.475 c -1.40395,0 -2.55263,1.15171 -2.55263,
            2.55937 0,1.40766 1.14868,2.55938 2.55263,2.55938 1.40395,0 2.55263,-1.15172 2.55263,-2.55938 0,-1.40766 -1.14868,-2.55937 -2.55263,-2.55937 z m 0,
            -10.2375 c -1.40395,0 -2.55263,1.15172 -2.55263,2.55937 0,1.40766 1.14868,2.55938 2.55263,2.55938 1.40395,0 2.55263,-1.15172 2.55263,-2.55938 0,
            -1.40765 -1.14868,-2.55937 -2.55263,-2.55937 z m 7.65789,21.75468 c -0.70197,0 -1.27631,0.57586 -1.27631,1.27969 0,0.70383 0.57434,1.27969 1.27631,
            1.27969 0.70198,0 1.27632,-0.57586 1.27632,-1.27969 0,-0.70383 -0.57434,-1.27969 -1.27632,-1.27969 z m -17.86842,8.95782 c -1.40394,0 -2.55263,
            1.15171 -2.55263,2.55937 0,1.40766 1.14869,2.55938 2.55263,2.55938 1.40395,0 2.55263,-1.15172 2.55263,-2.55938 0,-1.40766 -1.14868,-2.55937 -2.55263,
            -2.55937 z m 0,8.95781 c -0.70197,0 -1.27631,0.57586 -1.27631,1.27968 0,0.70383 0.57434,1.27969 1.27631,1.27969 0.70198,0 1.27632,-0.57586 1.27632,
            -1.27969 0,-0.70382 -0.57434,-1.27968 -1.27632,-1.27968 z M 24.89474,21.04219 c -2.11869,0 -3.82895,1.71478 -3.82895,3.83906 0,2.12428 1.71026,
            3.83906 3.82895,3.83906 2.11868,0 3.82894,-1.71478 3.82894,-3.83906 0,-2.12428 -1.71026,-3.83906 -3.82894,-3.83906 z m 0,21.75469 c -1.40395,
            0 -2.55264,1.15171 -2.55264,2.55937 0,1.40766 1.14869,2.55938 2.55264,2.55938 1.40394,0 2.55263,-1.15172 2.55263,-2.55938 0,-1.40766 -1.14869,
            -2.55937 -2.55263,-2.55937 z M 35.10526,31.27969 c -2.11868,0 -3.82894,1.71478 -3.82894,3.83906 0,2.12428 1.71026,3.83906 3.82894,3.83906 2.11869,
            0 3.82895,-1.71478 3.82895,-3.83906 0,-2.12428 -1.71026,-3.83906 -3.82895,-3.83906 z m 0,-10.2375 c -2.11868,0 -3.82894,1.71478 -3.82894,3.83906 0,
            2.12428 1.71026,3.83906 3.82894,3.83906 2.11869,0 3.82895,-1.71478 3.82895,-3.83906 0,-2.12428 -1.71026,-3.83906 -3.82895,-3.83906 z"/>
    </g>
  </svg>
)
