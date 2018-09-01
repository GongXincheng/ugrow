import com.hyg.utils.PinYin4jUtils;
import org.apache.commons.lang3.StringUtils;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;

public class SchoolPinYin {

    public static void main(String[] args) throws Exception {

        BufferedReader br = new BufferedReader(new FileReader("d:/211.log"));
        BufferedWriter bw = new BufferedWriter(new FileWriter("d:/211_py.log"));
        String line = null;
        while((line = br.readLine()) != null){
            String[] strArr = PinYin4jUtils.getHeadByString(line);
            String pinyin = StringUtils.join(strArr).toLowerCase();
            bw.write(line + "\t" + pinyin);
            bw.newLine();
            bw.flush();
        }

        bw.close();
        br.close();

    }

}


