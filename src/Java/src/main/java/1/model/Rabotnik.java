package 1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import 1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Работник
 */
@Entity(name = "IIS1Работник")
@Table(schema = "public", name = "Работник")
public class Rabotnik {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "номер")
    private Integer номер;

    @Column(name = "отчетство")
    private String отчетство;

    @Column(name = "имя")
    private String имя;

    @Column(name = "фамилия")
    private String фамилия;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dolzhnosti")
    @Convert("Dolzhnosti")
    @Column(name = "Должности", length = 16, unique = true, nullable = false)
    private UUID _dolzhnostiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dolzhnosti", insertable = false, updatable = false)
    private Dolzhnosti dolzhnosti;


    public Rabotnik() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getномер() {
      return номер;
    }

    public void setномер(Integer номер) {
      this.номер = номер;
    }

    public String getотчетство() {
      return отчетство;
    }

    public void setотчетство(String отчетство) {
      this.отчетство = отчетство;
    }

    public String getимя() {
      return имя;
    }

    public void setимя(String имя) {
      this.имя = имя;
    }

    public String getфамилия() {
      return фамилия;
    }

    public void setфамилия(String фамилия) {
      this.фамилия = фамилия;
    }


}