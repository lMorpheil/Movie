export default function Footer() {
    return (
        <footer className="page-footer purple darken-4">
            <div className="footer-copyright">
                © {new Date().getFullYear()} Copyright Text
                <a className="grey-text text-lighten-4 right" href="https://github.com/lMorpheil/Movie">Repo</a>
            </div>
        </footer>
    );
}