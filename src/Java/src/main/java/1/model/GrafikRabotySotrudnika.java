package 1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import 1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ГрафикРаботыСотрудника
 */
@Entity(name = "IIS1ГрафикРаботыСотрудника")
@Table(schema = "public", name = "ГрафикРаботыСотрудника")
public class GrafikRabotySotrudnika {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "времяНачала")
    private Date времяначала;

    @Column(name = "числоЧасов")
    private Double числочасов;

    @Column(name = "времяОкончания")
    private Date времяокончания;

    @Column(name = "Время")
    private Date время;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "TabelSmeny")
    @Convert("TabelSmeny")
    @Column(name = "ТабельСмены", length = 16, unique = true, nullable = false)
    private UUID _tabelsmenyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "TabelSmeny", insertable = false, updatable = false)
    private TabelSmeny tabelsmeny;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudnik")
    @Convert("Sotrudnik")
    @Column(name = "Сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudnik", insertable = false, updatable = false)
    private Sotrudnik sotrudnik;


    public GrafikRabotySotrudnika() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getвремяНачала() {
      return времяначала;
    }

    public void setвремяНачала(Date времяначала) {
      this.времяначала = времяначала;
    }

    public Double getчислоЧасов() {
      return числочасов;
    }

    public void setчислоЧасов(Double числочасов) {
      this.числочасов = числочасов;
    }

    public Date getвремяОкончания() {
      return времяокончания;
    }

    public void setвремяОкончания(Date времяокончания) {
      this.времяокончания = времяокончания;
    }

    public Date getВремя() {
      return время;
    }

    public void setВремя(Date время) {
      this.время = время;
    }


}