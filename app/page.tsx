import ContentBox from '@/components/contentBox';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.parent}>
            <ContentBox title="About Me:" width="100%" height="100%">
                <div className={styles.infoContainer}>
                    <mark>Name: </mark>base_13
                    <br />
                    <mark>Age: </mark>16
                    <br />
                    <mark>Email: </mark>
                    <a href="mailto:base.underscore.13@gmail.com">base.underscore.13@gmail.com</a>
                    <br />
                </div>
                <p>
                    <br />
                    <mark>
                        I am a passionate Indian Programmer interested in Electronics, and computers at low-level
                    </mark>
                    , who likes to build things from scratch.
                    <br />
                    <br />
                    I prefer balance between precision, abstraction, control, and convenience.
                    <br />
                    <br />I primarily work in <mark>Python, Typescript, and Zig.</mark>
                    <br />I focus on fixing things more than replacing them.
                    <br />
                    <br />
                    <mark>Skills:</mark>
                    <br />- Python
                    <br />- TS/TSX
                    <br />- Zig (learning)
                    <br />- C# (basic)
                    <br />
                    <br />
                    <mark>Currently Working On:</mark>
                    <br />- GBA emulator in Zig
                </p>
            </ContentBox>
        </div>
    );
}
